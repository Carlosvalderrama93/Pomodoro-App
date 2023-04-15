import render from "./utils.js";
import { renderTasks } from "./tasks.js";
// Crear función renderFilters()
// crear template
// Renderizat T
// consultar db
// return filtersEl
// export

const template = `<div class="filters"></div>`;
const filtersEl = render(template);

export function renderFilters() {
  filtersEl.innerHTML = "";
  const {tasks, filterSelected} = db.data;
  const statusTasks = { completed: 0, active: 0 };
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      statusTasks.completed += 1;
    } else {
      statusTasks.active += 1;
    }
  }
debugger
  const template2 = `<div>
      <span class="filters-completed" data-filter="completed" style="${filterSelected === "completed" ? "text-decoration: underline" : ""}">Completed: ${statusTasks.completed}</span>
      <span class="filters-active" data-filter="active" style="${filterSelected === "active" ? "text-decoration: underline" : ""}">Active: ${statusTasks.active}</span>
      <span class="filters-total-task" style="${filterSelected === "all" ? "text-decoration: underline" : ""}">Total task: ${tasks.length}</span>
    </div>`;

  const filterEl = render(template2);

  const filtersCompleted = filterEl.querySelector(".filters-completed");
  filtersCompleted.addEventListener("click", event =>{
    const {filter:filterType} = event.target.dataset;
    db.data.filterSelected = filterType;
    db.write();
    renderTasks(filterType);
    renderFilters();
  })

  const filtersActive = filterEl.querySelector(".filters-active");
  filtersActive.addEventListener("click", event =>{
    const {filter:filterType} = event.target.dataset;
    db.data.filterSelected = filterType;
    db.write();
    renderTasks(filterType);
    renderFilters();
  })

  const filtersTotalTask = filterEl.querySelector(".filters-total-task");
  filtersTotalTask.addEventListener("click", event =>{
    db.data.filterSelected = "all";
    db.write();
    renderTasks("all");
    renderFilters();
  })
  filtersEl.appendChild(filterEl);

  return filtersEl;
}
