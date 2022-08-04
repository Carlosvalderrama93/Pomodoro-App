const DOM = require("@testing-library/dom") // -> {}
const assert = require("chai").assert

let tasks = [
  {
    title: "Buy Milk",
    completed: false,
    id: 1
  },
  {
    title: "Sleep",
    completed: true,
    id: 2
  },
]

function renderTask(task) {
  return `
    <div class="task task-${task.id}">
      <input type="checkbox" ${task.completed ? "checked" : ""} class="task-completed"/>
      <input type="text" class="task-title" value="${task.title}" />
      <button class="task-delete" data-id="${task.id}">delete task</button>
    </div>
  `
}

function renderTasks() {
  const dummyDiv = document.createElement("div") //<div></div>
  dummyDiv.setAttribute("class", "tasks") //<div class="tasks"></div>

  const tasksDOM = tasks.map(task => renderTask(task))

  dummyDiv.innerHTML = tasksDOM

  return dummyDiv
}

describe.only("Task Form", function() {
  beforeEach(() => {
    document.innerHTML = ""
  })

  it("should render uncompleted tasks")

  it("should update the task when checkbox change", () => {
    const task = tasks[0]
    const taskTemplate = renderTask(task)
    const dummyDiv = document.createElement("div")

    dummyDiv.innerHTML = taskTemplate
    const checkboxEl = dummyDiv.querySelector(".task-completed")

    checkboxEl.addEventListener("change", (event) => {
      const checked = event.target.checked

      task.completed = checked
    })

    DOM.fireEvent.change(checkboxEl, {target: { checked: true }})
    assert.equal(checkboxEl.checked, task.completed)

    DOM.fireEvent.change(checkboxEl, {target: { checked: false }})
    assert.equal(checkboxEl.checked, task.completed)
  })

  it("should update a specific task when there are two task", () => {
    const tasksEl = renderTasks() // [task, taks]
    const task1El = tasksEl.querySelector(".task-1") // task
    const task2El = tasksEl.querySelector(".task-2") // task
    const checkbox1El = task1El.querySelector(".task-completed") // checkbox
    const checkbox2El = task2El.querySelector(".task-completed") // checkbox

    checkbox1El.addEventListener("change", (event) => {
      tasks[0].completed = event.target.checked
    })

    checkbox2El.addEventListener("change", (event) => {
      tasks[1].completed = event.target.checked
    })

    DOM.fireEvent.change(checkbox1El, { target: { checked: true }})
    assert.equal(checkbox1El.checked, true)
    assert.equal(checkbox2El.checked, true)

    DOM.fireEvent.change(checkbox2El, { target: { checked: false }})
    assert.equal(checkbox2El.checked, false)
    assert.equal(checkbox1El.checked, true)
  })

  it("should remove task when delete button is clicked", () => {
    const task = tasks[1]
    const taskTemplate = renderTask(task)
    const dummyDiv = document.createElement("div")

    dummyDiv.innerHTML = taskTemplate

    const deleteButtonEl = dummyDiv.querySelector(".task-delete")
    deleteButtonEl.addEventListener("click", (event) => {
      const dataset = event.target.dataset
      const id = Number(dataset.id)

      tasks = tasks.filter(task => task.id !== id)
      const taskEl = dummyDiv.querySelector(`.task-${id}`)

      dummyDiv.removeChild(taskEl)
    })

    DOM.fireEvent.click(deleteButtonEl)
    assert.equal(dummyDiv.children.length, 0)
    assert.equal(tasks.length, 1)
    assert.include(tasks[0], {title: "Buy Milk"})
  })

  it("should delete a specific task when there are two task", () => {
    let tasksEl = renderTasks();
    const taskEl = tasksEl.querySelector(".task-1")
    const buttonEl = taskEl.querySelector(".task-delete")

    buttonEl.addEventListener("click", (event) => {
      const dataset = event.target.dataset
      const id = Number(dataset.id)

      tasks = tasks.filter(task => task.id !== id)
    })

    DOM.fireEvent.click(buttonEl)
    tasksEl = renderTasks()

    assert.equal(tasksEl.children.length, 1)
    assert.equal(tasksEl.children[0].classList[1], "task-2")
    assert.equal(tasks.length, 1)
  })

  it("should update the task when the input change")
  it("should render a fallback message when tasks are empty")

  it("should remove task if task-title is empty")
  it("should not render completed tasks")
  it("should update the task priority when it changes")
  it("")
})
