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

  if (tasks.length === 0){
    return "There is not task"
  } else {
    const dummyDiv = document.createElement("div") //<div></div>
    dummyDiv.setAttribute("class", "tasks") //<div class="tasks"></div>
    const tasksDOM = []

    for (let index = 0; index < tasks.length; index++) {
      if (tasks[index].completed === false){
        const taskDOM = renderTask(tasks[index]);
        tasksDOM.push(taskDOM);
      }
    }

    dummyDiv.innerHTML = tasksDOM.join("")
    return dummyDiv
  }
}

describe("Task Form", function() {
  beforeEach(() => {
    document.innerHTML = ""
    tasks = [
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
  })

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
    tasks = [
      {title: "Consentir a Auri",
      id: 1,
      completed: false},

      {title: "Consentir a Roger",
      id: 2,
      completed: false},
    ]

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
    assert.equal(checkbox2El.checked, false)

    DOM.fireEvent.change(checkbox2El, { target: { checked: true }})
    assert.equal(checkbox2El.checked, true)
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

    tasks = [
      {title: "Consentir a Auri",
      id: 1,
      completed: false},

      {title: "Consentir a Roger",
      id: 2,
      completed: false},
    ]

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

  it("should update the task when the title change", function(){
    let tasksEl = renderTasks(); // Lista de tareas en DOM.
    const id = 1;
    const task = tasks.find(task => task.id === id);
    let taskEl = tasksEl.querySelector(`.task-${id}`); // 1ra tarea DOM
    let inputEl = taskEl.querySelector(".task-title"); //Linea boton DOM
    //Actualiza la tarea
    inputEl.addEventListener("change", (event) =>{
      const newValue = event.target.value; //guarda el nuevo cambio
      task.title = newValue; //actualiza el titulo
    });

    DOM.fireEvent.change(inputEl, {target:{value:"Consentir a Auri"}});
    assert.equal(inputEl.value, "Consentir a Auri");
    assert.equal(tasks[0].title, "Consentir a Auri");
  })

  it("should render a fallback message when tasks are empty", function(){
    tasks = [];
    const tasksEl = renderTasks();
    assert.equal(tasksEl, "There is not task");
  })

  it("should render uncompleted tasks", function (){
    const tasksEl = renderTasks();

    assert.equal(tasksEl.children.length, 1);
    assert.include(tasks[0], {completed: false});
  })

  it("should not render completed tasks", function (){
    const tasksEl = renderTasks();

    assert.equal(tasksEl.children.length, 1);
    assert.include(tasks[1], {completed: true});
  })

  it("should update the task priority when it changes")
  it("should remove task if task-title is empty")

})
