import { LowSync, LocalStorage } from "./lib/lowdb.js";

const adapter = new LocalStorage("db");
const db = new LowSync(adapter);

db.read();
db.data ||= {
  tasks: [{ title: "leer", id: 1, completed: true }, { title: "beber", id: 2, completed: true }, { title: "comer", id: 3, completed: false }],
  filterSelected:"all" };
db.write();
export default db;
