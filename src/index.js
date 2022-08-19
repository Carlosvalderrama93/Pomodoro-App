import newTaskEl from "./templates/new-task.js";
import { renderTasks } from "./templates/tasks.js";

const todoApp = document.querySelector(".todo-app");
todoApp.appendChild(newTaskEl);

const tasksEl = renderTasks();//consuto renderTasks
todoApp.appendChild(tasksEl);//appendChil a todoApp
