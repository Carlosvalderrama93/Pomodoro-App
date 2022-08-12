import render from "./utils.js"
// import { renderTasks } from "./tasks.js"

export const template = `<div class="new-task">
  <h3 class="new-task-header">To Do App</h3>
  <input type="text" class="new-task-title">
  <button disabled class="new-task-create">Create Task</button>
</div>`

const newTaskEl = render(template)
const newTaksTitle = newTaskEl.querySelector(".new-task-title")
const newTaksCreate = newTaskEl.querySelector(".new-task-create")

newTaksTitle.addEventListener("keyup", (e) => {
  if (e.target.value.length > 0 ){
    newTaksCreate.disabled = false;
  } else {
    newTaksCreate.disabled = true;
  }
})

newTaksCreate.addEventListener("click", () => {
  //const taskTitle  = newTaksTitle.value
  newTaksTitle.value = "";
  newTaksCreate.disabled = true;



  // renderTasks()
})


export default newTaskEl
