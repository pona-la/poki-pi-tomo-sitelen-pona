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
		const resulting = [ttf.replace(/\.ttf/, ".otf"), ttf.replace(/\.ttf/, ".woff"), ttf.replace(/\.ttf/, ".woff2")]
		for (const neu of resulting) {
			fam.generatedVariants.push(md.GeneratedVariant.fromObject({
				forFilename: ttf,
				generatedFileName: neu,
			}))
		}
	}
	for (const otf of fs.readdirSync(`families/${dir}`).filter(x => x.endsWith(".otf"))) {
		const resulting = [otf.replace(/\.otf/, ".otf"), otf.replace(/\.otf/, ".woff"), otf.replace(/\.otf/, ".woff2")]
		for (const neu of resulting) {
			fam.generatedVariants.push(md.GeneratedVariant.fromObject({
				forFilename: otf,
				generatedFileName: neu,
			}))
		}
	}
	fs.writeFileSync(`families/${dir}/metadata.json`, JSON.stringify(fam.toJSON(), null, "\t"))
}

handleFamily("sitelen seli kiwen")

// for (const dir of fs.readdirSync("families")) {
// 	handleFamily(dir)
// }