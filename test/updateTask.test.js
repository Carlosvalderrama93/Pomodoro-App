const assert = require('chai').assert
const crud = require('./crud.js')
const db = require('./db')

describe("Testing updateTask", function() {
    beforeEach(function() {
      db.set("tasks", []).write();
    })

    it("should update the properties that changed", function(){
      crud.addTask("titulo");
      let task = crud.readTask(1);
      let result = crud.updateTask(task.id, {
        title: "Titulo2",
        completed: true
      });

      assert.deepEqual(result, {id: 1, completed: true, title: 'Titulo2'})
    })

    it("should not fail if the id doesnt exists", function() {
      let dbResult =  crud.updateTask(3);

      assert.equal(dbResult, "This task does not exist: 3");
    })

    it("should update only the task of ID written", function(){
      crud.addTask("titulo1");
      crud.addTask("titulo2");
      let task1 =crud.readTask(1);
      let task2 =crud.readTask(2);
      crud.updateTask(2, {
        completed: true,
        title: "Titulo 2.0"
      });

      assert.deepEqual(task1, {
        title: "Titulo1",
        completed: false,
        id: 1
      })

      assert.deepEqual(task2, {
        title: "Titulo 2.0",
        completed: true,
        id: 2
      })
    })

  })
