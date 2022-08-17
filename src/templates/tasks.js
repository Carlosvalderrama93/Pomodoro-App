import db from "../db.js";
import { renderTask } from "./task.js";
import render from "./utils.js";

//0. crear la función renderTasks
//1. Crear el template de tasks
//2. renderizar el template
//3. iterar db
//4. correr renderTask
//5. guardarlo en una constante
//6. agregar taskEl a TasksEL
//7. Retornar TasksEl
//8. Exportar renderTasks.


// this function create a template div to save there all the tasks returned from
// rendertask function, after of iter db-tasks.
// After of this return the div that was saved on tasksEL.
const template = `<div class="tasks"></div>`;
const tasksEL = render(template);

export function renderTasks() {
  tasksEL.innerHTML = "";

  for (let i = 0; i < db.data.tasks.length; i++) {
    const task =db.data.tasks[i];
    const taskEl = renderTask(task);
    tasksEL.appendChild(taskEl);
  };

  return tasksEL;
}



