import render from "./utils.js";
import db from "../db.js";
import { renderTasks } from "./tasks.js";

//crear render task function
export function renderTask(task) {
  //crear template
  const template = `<div class="task task-${task.id}">
    <input class="task-completed" type="checkbox">
    <input class="task-text" type="text" value="${task.title}">
    <button class="task-delete" data-id="${task.id}">Delete</button>
  </div>`;

  const taskEl = render(template); // renderizar template

  const deleteButton = taskEl.querySelector(".task-delete"); //consultar botón delete-task
  //addeventlistener botón
  deleteButton.addEventListener("click", (event) => {

    const dataset = event.target.dataset; // Accediendo al dataset
    const id = Number(dataset.id); // Acceder y convertir la propiedad ID del Dataset a numero
    const tasks = db.data.tasks;
    const newTasks = [];
    //iterar tasks
    for(let i = 0; i < tasks.length; i++){
      //comparamos para llenar nuevo arreglo de tareas
      if(tasks[i].id !== id){
        newTasks.push(tasks[i]);
      }
    }
    debugger
    db.data = {tasks: newTasks};
    db.write();

    renderTasks()//Volver a renderizar tasks
  });

  return taskEl;
}
