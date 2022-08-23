import { renderTasks } from "./tasks.js"
import render from "./utils.js"

const template = `<div class="task">
  <input type="checkbox" class="task-completed">
  <input type="text" class="task-title">
  <button class="task-delete">Remove Task</button>
</div>`

export function renderTask(task) {
  const taskEl = render(template)
  const titleEl = taskEl.querySelector(".task-title")
  const completedEl = taskEl.querySelector(".task-completed")
  const deleteEl = taskEl.querySelector(".task-delete")

  deleteEl.setAttribute("data-id", task.id)
  deleteEl.addEventListener("click", e => {
    const button = e.target
    const dataset = button.dataset
    const taskID = Number(dataset.id)

    const res = window.tasks.filter(task => task.id !== taskID)
    window.tasks = res
    renderTasks()
  })



  titleEl.value = task.title
  completedEl.checked = task.completed

  return taskEl
}


// Que lenguaje de programacion?
// Que dispositivos
