import { assert } from "chai"
import DOM from "@testing-library/dom"

import notTasksEl from "../templates/not-tasks.js"

describe.only("Not Tasks", () => {
  it("should have a title", function(){
    const notTaskHeader = notTasksEl.querySelector(".not-tasks-header");

    assert.isNotNull(notTaskHeader);
    assert.equal(notTaskHeader.textContent, "List Tasks");
  })

  it("should have a paragraph", function(){
    const notTaskParagraph = notTasksEl.querySelector(".not-tasks-paragraph");

    assert.isNotNull(notTaskParagraph);
    assert.equal(notTaskParagraph.textContent, "There is not task");
  })

  it("Should has a class every node", function(){

    const notTaskHeader = notTasksEl.querySelector(".not-tasks-header");
    const notTaskParagraph = notTasksEl.querySelector(".not-tasks-paragraph");

    assert.equal(notTasksEl.className, "not-tasks"); //-->No Funcionó
    assert.equal(notTaskHeader.className, "not-tasks-header");
    assert.equal(notTaskParagraph.className, "not-tasks-paragraph")
  })

  it("should exists not-tasks node", function (){

    assert.isNotNull(notTasksEl);
  })
})
