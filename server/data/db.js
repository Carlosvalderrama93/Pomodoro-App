import { Low, JSONFile } from 'lowdb'

import path from 'node:path'
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const file = path.join(__dirname, 'db.json')

const adapter = new JSONFile(file)
const db = new Low(adapter)

await db.read()
db.data ||= { tasks: [],
filterType: "all" }

export default db;

