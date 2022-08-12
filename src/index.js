import newTaskEl from "./templates/new-task.js"
import notTasksEl from "./templates/not-tasks.js"

window.tasks = []

const todoApp = document.querySelector(".todo-app")
todoApp.appendChild(newTaskEl)
todoApp.appendChild(notTasksEl)

