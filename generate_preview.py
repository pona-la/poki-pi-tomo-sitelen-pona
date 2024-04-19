import sys
import gi
from os import path
import subprocess
gi.require_version("Gtk", "4.0")
from gi.repository import GLib, Gtk
import metadata_pb2 as metadata
from google.protobuf import json_format

for md in sys.argv[1:]:
    family: metadata.Family = None
    with open(md, 'r') as file:
        family = json_format.Parse(file.read(), metadata.Family())

    font = path.join(path.dirname(md), family.fonts[0].filename)
    out = path.join(path.dirname(md), "preview.png")
    subprocess.run(["./generate-preview", font, family.name, family.designer, "1" if family.ucsur_codepoints else "", out])
    print(f"generated {family.name}")
