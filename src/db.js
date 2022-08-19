import { LowSync, LocalStorage }  from './lib/lowdb.js';

const adapter = new LocalStorage('db')
const db = new LowSync(adapter)

db.read()
db.data ||= { tasks: [] }
db.write();
export default db;
