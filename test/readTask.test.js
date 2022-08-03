const assert = require("chai").assert;
const crud = require("./crud.js");
const db = require("./db");

describe("Testing readTask", function () {
  beforeEach(function () {
    db.set("tasks", []).write();
  });

  it("should call the task of ID written", function () {
    crud.addTask("titulo1");
    crud.addTask("titulo2");
    crud.addTask("titulo3");
    let taskRead = crud.readTask(2);

    assert.deepEqual(taskRead, {id: 2, completed: false, title: "Titulo2"});
  });

  it('should not fail if the id does not exists', function(){
    crud.addTask();
    let message = crud.readTask(3);

    assert.equal(message, "This task does not exist: 3");
  })
});
