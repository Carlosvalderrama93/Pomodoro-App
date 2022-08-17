import render from "./utils.js";
import {renderTasks} from "./tasks.js";
import db from "../db.js";
import { deleteTask } from "./crud-task.js";

export function renderTask(task){
  const template = `<div class="task task-${task.id}">
    <input type="checkbox" ${task.completed ? "checked" : ""} class="task-completed"/>
    <input type="text" class="task-title" value="${task.title}" />
    <button class="task-delete" data-id="${task.id}">delete task</button>
  </div>`

  const taskEl = render(template);
  const buttonTask = taskEl.querySelector(".task-delete");

  buttonTask.addEventListener("click", (event) =>{

    //1. identificar el id de la tarea del boton que se clicleo
    //1. Iterar lista de tareas
    //2. se va a comparar el Id de la taskEL con el ID del tasks-array
    //3. guardamos las tareas que no coincidan con el ID del array y del taskEL
    //4. db.algo y db.write.
    //0. Volver a renderizar la lista de tareas.

    const dataset = event.target.dataset;
    const id = Number(dataset.id);
    const tasks = db.data.tasks;
    const newTasks = [];

    for (let i = 0; i < tasks.length; i++){
      if(tasks[i].id !== id){
        newTasks.push(tasks[i]);
      }
    }
    db.data = {tasks : newTasks}
    db.write();
    renderTasks();
  })

  return taskEl;
}

//1. crear función
//2. crear el template.
//3. consultar el botón eliminar de la tarea
//4.agregar un listener al boton
//5. Implementar deleteTask
//6. retorno
