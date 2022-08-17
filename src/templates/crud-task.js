import {renderTasks} from "./tasks.js";
import db from "../db.js";


export function deleteTask (id){
  const tasks = db.data.tasks;
  tasks = tasks.filter(task => task.id !== id)
  db.data = { tasks: tasks}
  db.write();
  const tasksEl = renderTasks();
  debugger
  return tasksEl;
}

