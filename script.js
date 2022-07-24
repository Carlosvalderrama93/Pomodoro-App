// tareas por hacer
const taskArray = [];

let time = 0; // clock
let timer = null; // intervalo no definido
let timerBreak = null; // no definido
let currentTask = null; //no definido

const addTask = document.querySelector("#add-task");
const writingTask = document.querySelector("#writing-task");
const form = document.querySelector("#form");
const taskName = document.querySelector("#task-name");
const clock = document.querySelector("#clock");
const statusTask = document.querySelector(".status-task");
const infoStage = document.querySelector("#info-stage");

//Guarda el input.value, lo envia a createTask y se ejecuta renderTask.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (writingTask.value != "") {
    createTask(writingTask.value);
    writingTask.value = "";
    renderTasks();
  }
});

// crea una nueva tarea como objeto y se agrega al array task.
function createTask(nameTask) {
  const newTask = {
    id: (Math.random() * 100).toString(36).slice(3),
    title: nameTask,
    completed: false,
  };

  taskArray.unshift(newTask);
}

//Tomar cada uno de los elementos de las tareas y,
// generar un HTML que se inyectará a un contenedor
function renderTasks() {
  const html = taskArray.map((taskArray) => {
    return `
            <div class="individual-task">
                <button class="finish-task"></button>
                <div class="task-name">${taskArray.title}</div>
                <div class="completed">${
                  taskArray.completed
                    ? `<button> Done </button>`
                    : `<div class="start-button"><button data-id="${taskArray.id}"> Start </button></div>`
                }</div>
            </div>
        `;
  });

  // Gguarda en una constante la info del ID task-list en HTML y luego se inserta allí el codigo HTML del paso anterior.
  const taskList = document.querySelector("#task-list");
  taskList.innerHTML = html.join("");

  // Guarda en una constante la info de los elementos con la clase .individual-task e Itera los botones.
  const startButton = document.querySelectorAll(".start-button");
  startButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (!timer) {
        const id = button.getAttribute("data-id");
        startButtonHandler(id);
      }
    });
  });
}

// calcula los 25 min de cada tarea.
function startButtonHandler(id) {
  time = 10;
  currentTask = id;
  const taskIndex = taskArray.findIndex((task) => taskArray.id == id);
  renderTime();
  statusTask.textContent = "Pause";
  infoStage.textContent = "Task in progress..."; //****************************** */
  taskName.textContent = taskArray[taskIndex].title;
  timer = setInterval(() => {
    timeHandler(id);
  }, 1000);
}

function timeHandler(id) {
  time--;
  renderTime();

  if (time == 0) {
    clearInterval(timer);
    timer = null;
    renderTasks();
    startBreak();
    markCompleted(id);
    //timer = null;
  }
}

function renderTime() {
  const timeDiv = document.querySelector("#clock");
  const minutes = parseInt(time / 60);
  const seconds = parseInt(time % 60);
  timeDiv.innerHTML = `<p>${minutes < 10 ? "0" : ""}${minutes} </p>`;
  timeDiv.insertAdjacentText(
    "beforeend",
    `${seconds < 10 ? "0" : ""}${seconds}`
  );
}

 //Este es el meollo del asunto.--------------------------------------------------------------------------------------------------------------
function markCompleted(id) {
  const taskIndex = taskArray.findIndex((task) => taskArray.id == id);
  console.log(taskIndex, " este es el indice de taskIndex"); //***************************************************************************** */
  taskArray[taskIndex].completed = true;
}

function startBreak() {
  time = 7; //5 * 60;
  renderTime();
  timerBreak = setInterval(() => {
    timerBreakHandler();
  }, 1000);
}

function timerBreakHandler() {
  time--;
  renderTime();

  if (time == 0) {
    clearInterval(timerBreak);
    currentTask = null;
    timerBreak = null;
    taskName.textContent = "Countdown timer";
    infoStage.textContent = "Pomodoro stage";
    statusTask.textContent = "Start";
    renderTasks();
  }
}
