import * as fs from 'fs'
import md from './metadata_pb.js'
import * as cp from 'child_process'

function check(it) {
	console.warn(it.stdout.toString())
	console.warn(it.stderr.toString())
}

function handleFamily(dir) {
	const res = JSON.parse(fs.readFileSync(`families/${dir}/metadata.json`))
	const fam = md.Family.fromObject(res)

	console.warn(`=== ${fam} ===`)
	for (const ttf of fs.readdirSync(`families/${dir}`).filter(x => x.endsWith(".ttf"))) {
		console.warn(`=== ${ttf} ===`)
		console.warn(`--> otf`)
		check(cp.spawnSync('ftcli', ['converter', 'ttf2otf', `families/${dir}/${ttf}`, `-out`, `generated-variants/${dir}`]))
		console.warn(`--> woff/woff2`)
		check(cp.spawnSync('ftcli', ['converter', 'ft2wf', `families/${dir}/${ttf}`, `-out`, `generated-variants/${dir}`]))
	}
	for (const otf of fs.readdirSync(`families/${dir}`).filter(x => x.endsWith(".otf"))) {
		console.warn(`=== ${otf} ===`)
		console.warn(`--> otf`)
		check(cp.spawnSync('ftcli', ['converter', 'otf2ttf', `families/${dir}/${otf}`, `-out`, `generated-variants/${dir}`]))
		console.warn(`--> woff/woff2`)
		check(cp.spawnSync('ftcli', ['converter', 'ft2wf', `families/${dir}/${otf}`, `-out`, `generated-variants/${dir}`]))
	}
}

handleFamily("sitelen seli kiwen")

// for (const dir of fs.readdirSync("families")) {
// 	handleFamily(dir)
// }