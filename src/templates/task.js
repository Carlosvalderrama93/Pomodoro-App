import render from "./utils.js";
import { deleteTask, updatedTask } from "./crud-task.js";
import { renderFilters } from "./filters.js";
//crear template
//renderizar
//addEventListeners
//return

export function renderTask(task) {
  const template = `<div class="task">
    <input type="checkbox" class="task-completed" data-id="${task.id}" ${
    task.completed ? "checked" : ""
  }>
    <input type="text" class="task-input" value="${task.title}" data-id="${
    task.id
  }">
    <button class="task-delete-button" data-id="${task.id}">Delete</button>
    </div>`;

  const taskEl = render(template);

  const taskCompleted = taskEl.querySelector(".task-completed");
  taskCompleted.addEventListener("change", (event) => {
    //consultar db
    //idenitficar ID task to be updated
    //iterar db
    //Buscar la tarea con el ID
    //Actualizar status task

    const dataset = event.target.dataset;
    const idTask = Number(dataset.id);
    const isChecked = event.target.checked;

    updatedTask(idTask, {completed: isChecked});
    renderFilters();
  });

  const taskInput = taskEl.querySelector(".task-input");
  taskInput.addEventListener("keyup", (event) => {
    const dataset = event.target.dataset;
    const idTask = Number(dataset.id); // identificar Id de la tarea
    const titleTask = event.target.value.trim();
    if (titleTask.length === 0) {
      deleteTask(idTask); //DeleteTask
    }
    updatedTask(idTask, {title: titleTask});
  });

  const taskDeleteButton = taskEl.querySelector(".task-delete-button");
  taskDeleteButton.addEventListener("click", (event) => {
    const dataset = event.target.dataset;
    const idTask = Number(dataset.id); // identificar Id de la tarea
    deleteTask(idTask); //DeleteTask
  });

  return taskEl;
}
