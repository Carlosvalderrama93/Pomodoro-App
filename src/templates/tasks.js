import render from "./utils.js";
import db from "../db.js";
import { renderTask } from "./task.js";

const template = `<div class="tasks"></div>`;// crear template div contenedor
const tasksEl = render(template);// renderizar div

// crear función
export function renderTasks(){
  tasksEl.innerHTML = "";
  const tasks = db.data.tasks;
  // iterar db
  for(let i = 0; i < tasks.length; i++){
    const taskEl = renderTask(tasks[i]);// renderizar taskEl
    tasksEl.appendChild(taskEl);// append child de taskEl a TasksEl
  }
  return tasksEl;// return TasksEl
};
