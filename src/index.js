import newTaskEl from "./templates/new-task.js"
import { renderTasks } from "./templates/tasks.js"

import emptyTasksEl from "./templates/empty-tasks.js";

window.tasks = [
  // {
  //   id: 1,
  //   title: "Buy Milk",
  //   completed: true
  // },
  // {
  //   id: 2,
  //   title: "Take a Shower",
  //   completed: false
  // },
]

const todoApp = document.querySelector(".todo-app")

todoApp.appendChild(newTaskEl)

if (window.tasks.length > 0) {
  window.tasks.forEach(task => tasksEl.append(renderTask(task)))

} else {
  todoApp.appendChild(emptyTasksEl)
}

