import render from "./utils.js";

// 1. template.
// 2. render template
// 3. Export

const template = `<div class="new-tasks">
<h1 class="new-tasks-title">To Do App</h1>
<input class="new-tasks-input"type="text" placeholder="Write a new task">
<button class="new-tasks-button">Add</button>
</div>`;

const newTaskEl = render(template);

export default newTaskEl;
