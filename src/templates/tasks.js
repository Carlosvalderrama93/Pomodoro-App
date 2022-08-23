import render from "./utils.js";
import emptyTasksEl from "./empty-tasks.js";
import { renderTask } from "./task.js";

const template = `<div class="tasks"></div>`
const tasksEl = render(template)

export function renderTasks() {
  tasksEl.innerHTML = ""

  window.tasks.length
    ? window.tasks.forEach(task => tasksEl.append(renderTask(task))) //append tasks
    : window.tasksEl.append(emptyTasksEl)
}

export default tasksEl
