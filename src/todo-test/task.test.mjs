import { assert } from "chai"
import DOM from "@testing-library/dom"
import { deleteTask } from "../templates/crud-task.js";
import {renderTask} from "../templates/task.js"

import db from "../db.js";

db.data = { tasks: [{title: "tarea-1", id: 10, completed:false}, {title: "tarea-2", id: 11, completed:false}]}
db.write();
const tasksConsulted = db.data.tasks[0];
const taskEl = renderTask(tasksConsulted);

describe("Task", () => {

  it("should have at least one children", function(){
    assert.notEqual(taskEl.childElementCount, 0);
  })

  it("should have a completed class", function(){
    const completedTask = taskEl.querySelector(".task-completed");
    assert.equal(completedTask.className, "task-completed")
  })

  it("should have an input with class name task-input", function(){
    const titleTask = taskEl.querySelector(".task-input");
    assert.equal(titleTask.className, "task-input")
  })

  it("should have a delete class", function(){
    const deleteTaskEl = taskEl.querySelector(".task-delete-button");

    assert.equal(deleteTaskEl.className, "task-delete-button");
  })

  it("should delete the task when the title is erased", function(){

  })

  it("should delete the task of the button-delete clicked", function(){

  })



})
