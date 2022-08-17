import {renderTasks} from "./templates/tasks.js"
import {newTask} from "./templates/new-task.js"

//1. consultar la raiz de la app
//2. consultar el return de NewTask
//3. AppendChild a todoApp con lo retornado


const todoApp = document.querySelector(".todo-app")//1
const newTaskEl = newTask(); //2
todoApp.appendChild(newTaskEl); //3





const tasksEl = renderTasks(); // 1. guardar el return de rendesTasks que retorna TasksEl
debugger
todoApp.appendChild(tasksEl); // 2. hacer un appendChild de todoApp con lo guardado en el paso anterior.

