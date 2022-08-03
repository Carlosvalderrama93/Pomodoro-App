const DOM = require("@testing-library/dom") // -> {}
const assert = require("chai").assert

const tasks = [
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

function createTasks() {
  const tasksWrapper = document.createElement("div") //<div></div>
  tasksWrapper.setAttribute("class", "tasks") //<div class="tasks"></div>

  const tasksDOM = tasks.map(task => `
    <div class="task">
      <input type="checkbox" ${task.completed && "checked"} class="task-completed"/>
      <input type="text" class="task-title" value=${task.title} />
      <div class="task-status">${
        task.completed
          ? `<button class="task-done">Done</button>`
          : `<button class="task-start" data-id="${task.id}">Start</button>`
      }</div>
      <button>delete task</button>
    </div>
  `)

  tasksWrapper.innerHTML = tasksDOM

  return tasksWrapper
}

describe.only("Task Form", function() {
  let tasksElement;

  beforeEach(() => {
    tasksElement = createTasks()
  })

  it("should render uncompleted tasks", () => {
    const tasksDOM = tasksElement.querySelectorAll("task")

    Array.from(tasksDOM).map((taksDOM, i) => {
      const task = tasks[i]

      assert.isOk(DOM.getByRole(taksDOM, task.completed))
      assert.isOk(DOM.getByText(taksDOM, task.title))

      if (task.completed) {
        assert.isOk(DOM.getByText(taksDOM, "Done"))
      } else {
        assert.isOk(DOM.getByText(taksDOM, "Start"))
      }
    })
  })

  it("should update the task when checkbox change")
  it("should remove task when delte button is pressed")
  it("should remove task if task-title is empty")
  it("should update the task whene the input change")
  it("should start a timer when start button is pressed")
  it("should update the task as completed when the timer ends")
  it("should not render completed tasks")
  it("should render a fallback message when tasks are empty")
  it("")
  it("should update the task priority when it changes")
})
