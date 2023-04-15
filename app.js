import newTaskEl from "./templates/new-task.js"
import { renderTasks } from "./templates/tasks.js";

const todoApp = document.querySelector(".todo-app");
// add new tasks element
todoApp.appendChild(newTaskEl);

// const tasksEl = await renderTasks();
// todoApp.appendChild(tasksEl);
