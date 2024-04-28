#!/usr/bin/env python3

import metadata_pb2 as metadata
from google.protobuf import json_format
import subprocess
import sys
import shutil
import hashlib
import requests
import tqdm

def hash_file(path: str) -> str:
	sha256 = hashlib.sha256()
	with open(path, 'rb') as f:
		while True:
			data = f.read(1048576)
			if not data:
				break
			sha256.update(data)
	return sha256.hexdigest()

def handle_family(dir: str):
	family: metadata.Family = None
	with open(f"families/{dir}/metadata.json", 'r') as file:
		family = json_format.Parse(file.read(), metadata.Family())

	print(f"=== {dir} ===")

	match family.source.WhichOneof("source"):
		case "git":
			git = family.source.git
			print(f"Checking out {git.repository_url}")
			subprocess.run(["git", "-C", "checkouts", "clone", "--filter=blob:none", git.repository_url, dir], stdout=sys.stdout, stderr=sys.stderr)
			print(f"Switching to {git.ref}...")
			subprocess.run(["git", "-C", f"checkouts/{dir}", "fetch", git.ref], stdout=sys.stdout, stderr=sys.stderr)
			subprocess.run(["git", "-C", f"checkouts/{dir}", "checkout", git.ref], stdout=sys.stdout, stderr=sys.stderr)
			commit_proc = subprocess.run(["git", "-C", f"checkouts/{dir}", "rev-parse", "HEAD"], capture_output=True)
			commit = commit_proc.stdout.decode("utf-8")
			with open(f"families/{dir}/commit", "w") as f:
				f.write(commit)
			for file in family.source.files:
				print(f"{file.source_file} => {file.dest_file}")
				shutil.copyfile(f"checkouts/{dir}/{file.source_file}", f"families/{dir}/{file.dest_file}")
				with open(f"families/{dir}/{file.dest_file}.sha256", 'w') as f:
					f.write(hash_file(f"families/{dir}/{file.dest_file}"))
		case "web":
			web = family.source.web
			for file in fam.source.files:
				print(f"Downloading {web.root_url}/{file.source_file}...")
				response = requests.get(f"{web.root_url}/{file.source_file}", stream=True)
				with open(f"families/{dir}/{file.dest_file}", "wb") as w:
					for data in tqdm.tqdm(response.iter_content()):
						w.write(data)
				with open(f"families/{dir}/{file.dest_file}.sha256", 'w') as f:
					f.write(hash_file(f"families/{dir}/{file.dest_file}"))
		case _:
			pass

for md in sys.argv[1:]:
	handle_family(md)
