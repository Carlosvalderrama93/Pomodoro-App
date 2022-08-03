const DOM = require("@testing-library/dom") // -> {}
const assert = require("chai").assert

const { addTask } = require("./crud")

let title

function createForm() {
  const form = document.createElement('form') // <header></header>

  form.innerHTML = `
    <input type="text" placeholder="write new task" id="writing-task">
    <input type="submit" value="Add" id="add-task" disabled>
  `

  const taskTitle = form.querySelector("#writing-task")
  const submitButton = form.querySelector("#add-task")

  taskTitle.addEventListener("change", function(event) {
    const inputValue = event.target.value

    if (inputValue === "") {
      submitButton.disabled = true
    } else {
      title = inputValue
      submitButton.disabled = false
    }
  })

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (taskTitle.value != "") {
      // addTask(writingTask.value);
      taskTitle.value = "";
    }
  })

  return form
}

describe("Form", function() {
  let form

  beforeEach(function() {
    title = ""
    form = createForm()
  })

  it("should check if the input is empty once the form is submited", function() {
    const writingTask = form.querySelector("#writing-task")

    writingTask.value = "Titulo"
    DOM.fireEvent.submit(form, {})

    writingTask.value = ""
  })

  it("should update the task title once the input change", function() {
    const writingTask = form.querySelector("#writing-task")
    DOM.fireEvent.change(writingTask, {target: { value: "c" }})
    assert.equal(writingTask.value, title)

    DOM.fireEvent.change(writingTask, {target: { value: "co" }})
    assert.equal(writingTask.value, title)

    DOM.fireEvent.change(writingTask, {target: { value: "com" }})
    assert.equal(writingTask.value, title)
  })

  it("should disabled the submit button if the input is empty", function() {
    const submitButton = form.querySelector("#add-task")

    assert.isTrue(submitButton.disabled)
  })

  it("should enable the submit button if the input is not empty", function() {
    const submitButton = form.querySelector("#add-task")
    const writingTask = form.querySelector("#writing-task")

    // writingTask.value = "Titulo"
    DOM.fireEvent.change(writingTask, { target: { value: "titulo" }})

    assert.isFalse(submitButton.disabled)
  })
})
