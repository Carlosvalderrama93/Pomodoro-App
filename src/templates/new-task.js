import render from "./utils.js";
import {createTask} from "../crud.js";
//crear template
//renderizar el template
//agregar listener
//exportar

const template = `<div class="new-task">
<h1>To do app</h1>
<input type="text" class="new-task-input" placeholder="Write a task">
<button class="new-task-add">Add</button>
</div>`;

const newTaskEl = render(template);
//consultando new-task-input
const newTaskInput = newTaskEl.querySelector(".new-task-input");

newTaskInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13){
    const taskName = newTaskInput.value.trim(); //consultar el valor de newTaskInput;
    createTask(taskName);
    newTaskInput.value = ""; //vaciar el input
  }
});

const newTaskAdd = newTaskEl.querySelector(".new-task-add");
//clickear el botón añadir tarea
newTaskAdd.addEventListener("click", function (event) {
  const taskName = newTaskInput.value.trim(); //consultar el valor de newTaskInput;
  createTask(taskName);
  newTaskInput.value = ""; //vaciar el input
});

export default newTaskEl;
