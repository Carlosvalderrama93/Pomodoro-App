import render from "./utils.js";
import { deleteTask } from "../crud.js";
// crear template
//renderizar template
//agregar listerners
// exportar

export function renderTask(task) {
  const template = `<div class="task task-${task.id}">
    <input type="checkbox" class="task-complete">
    <input type="text" class="task-text" data-id=${task.id} value="${task.title}">
    <button class="task-delete" data-id=${task.id}>Delete</button>
  </div>`;

  const taskEl = render(template);

  //consultando task-completed
  const taskCompleted = taskEl.querySelector(".task-complete");
  taskCompleted.addEventListener("", (event) => {});

  //consultando task-text
  const taskText = taskEl.querySelector(".task-text");
  taskText.addEventListener("keyup", (event) => {
    //if comparar length event.target.value
    if (event.target.value.length === 0) {
      const dataset = event.target.dataset; //identificar el ID de la tarea
      const id = Number(dataset.id); //identificar el ID de la tarea
      deleteTask(id); //DeleteTask
    }
  });

  //consultando task-delete
  const taskDeleteButton = taskEl.querySelector(".task-delete");
  taskDeleteButton.addEventListener("click", (event) => {
    const dataset = event.target.dataset; //identificar el ID de la tarea
    const id = Number(dataset.id); //identificar el ID de la tarea
    deleteTask(id);
  });

  return taskEl;
}
