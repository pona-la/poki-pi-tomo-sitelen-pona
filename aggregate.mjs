import * as fs from 'fs';
import { compress } from 'compress-json'

const res = {}

for (const dir of fs.readdirSync("families")) {
	const it = JSON.parse(fs.readFileSync(`families/${dir}/metadata.json`))
	for (const font of it.fonts) {
		delete font.characters
	}
	const it2 = JSON.parse(fs.readFileSync(`families/${dir}/metadata.json`))
	fs.writeFileSync(`families/${dir}/metadata_compressed.json`, JSON.stringify(compress(it2), null, "\t"))
	res[dir] = it
}

fs.writeFileSync(`index.json`, JSON.stringify(res, null, "\t"))
