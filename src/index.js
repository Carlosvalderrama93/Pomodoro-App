import newTaskEl from "./templates/new-task.js";
import {renderTasks} from  "./templates/tasks.js";

const todoApp = document.querySelector(".todo-app");// consultar todo app
todoApp.appendChild(newTaskEl);// appendchild newTaskEl

const tasksEl = renderTasks(); //Renderizar tasks
todoApp.appendChild(tasksEl);// append child a todo app de tasks
