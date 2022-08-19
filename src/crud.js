import db from "./db.js";
import { renderTasks } from "./templates/tasks.js";

export function deleteTask(id) {
  const newTasks = []; //definir un array nuevo
  const tasks = db.data.tasks; //consultar db
  //iterar db
  for (let i = 0; i < tasks.length; i++) {
    //comparar el ID de la tarea de db y la que se desea eliminar
    if (tasks[i].id !== id) {
      newTasks.push(tasks[i]); //se guardan las que no coincidan
    }
  }

  db.data = { tasks: newTasks };
  db.write(); //se actualiza la db
  renderTasks(); //renderizar de nuevo la lista de tareas
}

export function createTask(taskName){

  if (taskName !== "") {
    const id = db.data.tasks.length + 1; //definir un ID
    const tasks = db.data.tasks; //consultar db
    const task = { title: taskName, id: id, completed: false }; //construir objecto task con las propiedades respectivas.
    tasks.push(task); //db.push(task);
    db.data = { tasks: tasks };
    db.write();
    renderTasks();
  }

}
