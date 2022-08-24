import { renderTasks } from "./tasks.js";
import db from "../db.js";
import { renderFilters } from "./filters.js";

export function deleteTask(idTask) {
  const tasks = db.data.tasks; // consultar db
  const newDb = []; // generar nueva db
  // iterar db
  for (let i = 0; i < tasks.length; i++) {
    // comparar db-task con task deleted
    if (tasks[i].id !== idTask) {
      newDb.push(tasks[i]); // guardar las tareas de la db que no coincidan con la condición
    }
  }

  db.data = { tasks: newDb };
  db.write(); // Actualizar db
  renderTasks(); // renderizar tasks
  renderFilters();
}

export function createTask(taskName) {
  if (taskName.length !== 0) {
    const tasks = db.data.tasks; //consultar tasks
    const idTask = tasks.length; //Generar ID task
    const task = { title: taskName, id: idTask, completed: false }; //crear task
    tasks.push(task); //push taskName en tasks
    db.data = { tasks: tasks };
    db.write(); //actualizar db
    renderTasks(); //renderizar tasks
    renderFilters();
  }
}

export function updatedTask(idTask, data) {
  const tasks = db.data.tasks;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === idTask) {
      tasks[i] = {...tasks[i], ...data};
    }
  }

  db.write();
}
