const assert = require('chai').assert
const crud = require('./crud.js')
const db = require('./db')

describe("Testing removeTask", function() {
    beforeEach(function() {
      db.set("tasks", []).write()
    })

    it('should remove a task', function () {
      crud.addTask();
      let deletedTasks = crud.removeTask(1);

      assert.equal(deletedTasks.length, 1)
    })

    it('should not fail if the id doesnt exists', function(){
      crud.addTask();
      let deletedTasks = crud.removeTask(3);

      assert.equal(deletedTasks.length, 0);
    })
})
