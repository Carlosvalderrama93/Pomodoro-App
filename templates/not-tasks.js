import render from "./utils.js"

const template = `<div class="not-tasks">
  <h4 class="not-tasks-header">List Tasks</h4>
  <p class="not-tasks-paragraph">There is not task</p>
</div>`

const notTasksEl = render(template);

export default notTasksEl;
