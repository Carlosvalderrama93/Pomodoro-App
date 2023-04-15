import render from "./utils.js";
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

export async function renderTasks(filterType) {
  /*
  if(filterType === undefined){
    filterType = db.data.filterSelected;
  }
//   */

  tasksEl.innerHTML = "";
  // const tasks = db.data.tasks;
  const result = await fetch("http://localhost/tasks"); //por defecto es un get
  const json = await result.json();

  //{tasks:[{}...{}], filterType:string}

  const tasks = json.tasks;

  for (let i = 0; i < tasks.length; i++) {
    const taskEl = renderTask(tasks[i]);
    tasksEl.appendChild(taskEl);
  }

  return tasksEl;
}
