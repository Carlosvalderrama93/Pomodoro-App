import newTaskEl from "./templates/new-task.js";
import { renderTasks } from "./templates/tasks.js";
import { renderFilters } from "./templates/filters.js";
//consultar todo-app
//appenchild con new-task

const todoApp = document.querySelector(".todo-app");
todoApp.appendChild(newTaskEl);

//consultar tasksEl
//appendChild a todoApp con tasksEl
const tasksEl = renderTasks();
todoApp.appendChild(tasksEl);

// Consultar FiltersEl
// AppendChild

const filtersEl = renderFilters();
todoApp.appendChild(filtersEl);
