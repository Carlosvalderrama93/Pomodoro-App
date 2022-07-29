const assert = require('chai').assert
const crud = require('./crud.js')
const db = require('./db')

describe("Testing removeTask", function() {
    beforeEach(function() {
      db.set("tasks", []).write()
    })
    it('should remove a task', function () {
      crud.addTask()
      crud.removeTask(1)

      tasks = db.get("tasks").value()
      assert.equal(tasks.length, 1)
    })
    it('should not fail if the id doesnt exists')
})
