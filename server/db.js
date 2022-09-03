import { Low, JSONFile } from 'lowdb'

const adapter = new JSONFile('db.json')
const db = new Low(adapter)

await db.read()
db.data ||= { tasks: [] }

export default db;
