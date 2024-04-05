import * as fs from 'fs';
import md from './metadata_pb.js'
import parse from 'spdx-expression-parse'
import * as path from 'path'
import fetch from 'node-fetch'
import * as cp from 'child_process'
import * as os from 'os'
import * as process from 'process'
import { createHash } from 'crypto';

const failures = []
let found = false

async function handleFamily(dir) {
	const res = JSON.parse(fs.readFileSync(`families/${dir}/metadata.json`))
	const fam = md.Family.fromObject(res)
	console.log(`== ${dir} ==`)
	if (fam.source.git instanceof Object) {
		const git = fam.source.git
		console.log(`Checking out ${git.repositoryUrl}...`)
		cp.spawnSync('git', ['-C', 'checkouts', 'clone', '--filter=blob:none', git.repositoryUrl, dir])
		console.log(`Switching to ${git.ref}...`)
		cp.spawnSync('git', ['-C', `checkouts/${dir}`, 'checkout', git.ref])
		const commit = cp.spawnSync('git', ['-C', `checkouts/${dir}`, `rev-parse`, `HEAD`])
		fs.writeFileSync(`families/${dir}/commit`, commit.stdout)
		for (const file of fam.source.files) {
			fs.copyFileSync(`checkouts/${dir}/${file.sourceFile}`, `families/${dir}/${file.destFile}`)
			fs.writeFileSync(`families/${dir}/${file.destFile}.sha256`, createHash('sha256').update(fs.readFileSync(`families/${dir}/${file.destFile}`)).digest('hex'))
		}
	} else if (fam.source.web instanceof Object) {
		const web = fam.source.web
		for (const file of fam.source.files) {
			console.log(`Downloading ${web.rootUrl}/${file.sourceFile}...`)
			const result = await fetch(`${web.rootUrl}/${file.sourceFile}`)
			const data = Buffer.from(await result.arrayBuffer())
			fs.writeFileSync(`families/${dir}/${file.destFile}`, data)
			fs.writeFileSync(`families/${dir}/${file.destFile}.sha256`, createHash('sha256').update(data).digest('hex'))
		}
	} else {
		throw `invalid source`
	}
}

handleFamily("Fairfax")
handleFamily("FairfaxHD")

// for (const dir of fs.readdirSync("families")) {
// 	if (dir == "linja wawa") {
// 		found = true
// 		continue
// 	} else if (!found) {
// 		continue
// 	}
// 	try {		
// 		await handleFamily(dir)
// 	} catch (e) {
// 		console.warn(`failure for ${dir}: ${e}`)
// 		process.exit(-1)
// 	}
// }
