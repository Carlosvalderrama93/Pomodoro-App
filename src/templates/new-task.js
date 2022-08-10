import render from "./utils.js"
import { renderTasks } from "./tasks.js"

export const template = `<div class="new-task">
  <input type="text" class="new-task-title">
  <button disabled class="new-task-create">Create Task</button>
</div>`

const newTaskEl = render(template)

const newTaksTitle = newTaskEl.querySelector(".new-task-title")
newTaksTitle.addEventListener("keyup", (e) => {})

const newTaksCreate = newTaskEl.querySelector(".new-task-create")

newTaksCreate.addEventListener("click", () => {
  const taskID = window.tasks.length + 1
  const taskTitle  = newTaksTitle.value
  window.tasks.push({id: taskID, completed: false, title: taskTitle})

  renderTasks()
})

export default newTaskEl
