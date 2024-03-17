import * as fs from 'fs';

const res = {}

for (const dir of fs.readdirSync("families")) {
	const it = JSON.parse(fs.readFileSync(`families/${dir}/metadata.json`))
	res[dir] = it
}

fs.writeFileSync(`all.json`, JSON.stringify(res, null, "\t"))
