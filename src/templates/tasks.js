import render from "./utils.js";
import { renderTask } from "./task.js";
import db from "../db.js";

//crear template
//renderizar template
//renderizar tareas individuales
//exportar

const template = `<div class="tasks"></div>`;

const tasksEl = render(template);

export function renderTasks(){
  tasksEl.innerHTML = "";
  const tasks = db.data.tasks;//consultar tareas disponibles.
  //iterar tareas
  for (let i = 0; i < tasks.length; i++){
    const taskEl = renderTask(tasks[i]);//renderizar tareas individuales
    tasksEl.appendChild(taskEl);//appendChild de tasksEl con tareas individuales renderizadas
  }

  return tasksEl;  //returnar tasksEl
}
