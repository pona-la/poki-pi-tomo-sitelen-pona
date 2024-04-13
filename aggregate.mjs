import * as fs from 'fs';
import { compress } from 'compress-json'

const res = {}

for (const dir of fs.readdirSync("families")) {
	const it = JSON.parse(fs.readFileSync(`families/${dir}/metadata.json`))
	res[dir] = it
}

fs.writeFileSync(`all.json`, JSON.stringify(compress(res), null, "\t"))
