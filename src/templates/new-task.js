import render from "./utils.js";
import { createTask } from "./crud-task.js";

//crear template
//renderizar

const template = `<div class="new-task">
    <h1 class="new-task-header">To Do App</h1>
    <input type="text" class="new-task-input" placeholder="Write a task...">
    <button class="new-task-button" disabled>Add</button>
  </div>`;

const newTaskEl = render(template);

const newTaskInput = newTaskEl.querySelector(".new-task-input");
newTaskInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    const taskName = newTaskInput.value.trim(); //consultar nombre de la tarea.
    createTask(taskName);
    newTaskInput.value = "";
  }

  newTaskButton.disabled = newTaskInput.value.length < 1;
});

const newTaskButton = newTaskEl.querySelector(".new-task-button");
newTaskButton.addEventListener("click", (event) => {
  const taskName = newTaskInput.value.trim(); //consultar nombre de la tarea.
  createTask(taskName);
  newTaskInput.value = "";
  newTaskButton.disabled = true;
});

export default newTaskEl;
