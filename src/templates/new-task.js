import render from "./utils.js"
//0. export newTask
//1. crear función new-task
//2. crear template.
//3. renderizar template.
//4. retornar el template guardado

//0 y 1
export function newTask (){
  const template = `<div class="new-task">
  <h1 class="new-task-title">To do app</h1>
  <input class="new-task-input" type="text">
  <button class="new-task-button">Add</button>
  </div>`; //2

  const newTaskEl = render(template); //3
  return newTaskEl; // 4
}
