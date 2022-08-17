import { LowSync, LocalStorage }  from './lib/lowdb.js';

const adapter = new LocalStorage('db')
const db = new LowSync(adapter)

db.read()
db.data = { tasks: [{title:"Carlos", id: 1, completed:false}, {title:"Andres", id: 2, completed:false}] }
db.write();
export default db;
