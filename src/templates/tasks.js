import render from "./utils.js";
import db from "../db.js";
import { renderTask } from "./task.js";
//crear template
//renderizar template
//consultar db
//iterar db
//renderizar task
//appendChild a tasksEl de taskEl
//retornar tasksEl

const template = `<div class="tasks"></div>`;
const tasksEl = render(template);

export function renderTasks(filterType) {
  if(filterType === undefined){
    filterType = db.data.filterSelected;
  }

  tasksEl.innerHTML = "";
  const tasks = db.data.tasks;

  for (let i = 0; i < tasks.length; i++) {
    if(filterType === "completed" && tasks[i].completed ){
      const taskEl = renderTask(tasks[i]);
      tasksEl.appendChild(taskEl);
    } else if (filterType === "active" && !tasks[i].completed){
      const taskEl = renderTask(tasks[i]);
      tasksEl.appendChild(taskEl);
    } else if (filterType === "all") {
      const taskEl = renderTask(tasks[i]);
      tasksEl.appendChild(taskEl);
    }

  }

  return tasksEl;
}
