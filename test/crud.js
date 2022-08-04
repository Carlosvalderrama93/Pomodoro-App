//CRUD
//Create
//Read
//Update
//Delete
const db = require("./db");

//button add task was pressed
function capitalizeFirstLetter(string) {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function addTask(title, completed) {
  let isCompleted = false;

  if (title === undefined) {
    return "Title is needed";
  } else if (typeof title !== "string") {
    return "Title must be string";
  }
  if (completed === true) {
    isCompleted = completed;
  }

  const newTask = {
    id: db.get("tasks").value().length + 1,
    completed: isCompleted,
    title: capitalizeFirstLetter(title),
  };

  db.get("tasks").push(newTask).write();

  return newTask;
}

//press button delete
function removeTask(id) {
  return db.get("tasks").remove({ id: id }).write();
}

//press button update task
function updateTask(id, taskUpdated) {
  if (id > db.get("tasks").size().value()) {
    return "This task does not exist: " + id.toString();
  }

  return db.get("tasks").find({ id: id }).assign(taskUpdated).write();
}

//read a task
function readTask(id) {
  if (id > db.get("tasks").size().value()) {
    return "This task does not exist: " + id.toString();
  }

  const taskRead = db.get("tasks").find({ id: id }).value();
  return taskRead;
}

module.exports = {
  addTask,
  removeTask,
  updateTask,
  readTask,
};
