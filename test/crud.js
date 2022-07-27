//CRUD
//Create
//Read
//Update
//Delete
const db = require("./db")

//button add task was pressed
function addTask(completed) {
  let isCompleted = false;

  if (completed === true) {
   isCompleted = completed
  }

  const newTask = {
    id: db.get("tasks").value().length + 1,
    completed: isCompleted
  }

  db.get("tasks").push(newTask).write()

  return newTask
}

//press button delete
function removeTask(id) {
  db.get('tasks')
    .remove({ id: id })
    .write()
}

//press button update task
function updateTask(id) {}

//read a task
function readTask(id) {}

module.exports = {
    addTask,
    removeTask,
    updateTask,
    readTask
}
