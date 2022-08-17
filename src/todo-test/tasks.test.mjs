import { assert } from "chai"
import DOM from "@testing-library/dom"

import {renderTasks} from "../templates/tasks.js"
import db from "../db.js";

describe("Tasks", () => {

  it("should not have a child", function(){
    db.data = { tasks: [] }
    db.write();

    const tasksEl = renderTasks();
    assert.equal(tasksEl.childElementCount, 0)
  })

  it("should have a class", function(){
    const tasksEl = renderTasks();
    assert.equal(tasksEl.className, "tasks")
  })

  it("should have at least one child", function(){
    db.data = { tasks: [{title: "tarea-1", id: 10, completed:false}]}
    db.write();
    const tasksEl = renderTasks();
    assert.equal(tasksEl.children.length, 1);

  })
})
