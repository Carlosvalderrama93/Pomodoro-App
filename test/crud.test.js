const assert = require('chai').assert

const db = require("./db")
const crud = require('./crud.js')

describe("Testing CRUD Methods", function () {
  describe("Testing addTask", function() {
    beforeEach(function () {
      db.set('tasks', []).write()
      console.log("beforeEach")
    });

    it('should start as empty array', function() {
      const tasks = db.get("tasks").value()

      assert.isEmpty(tasks)
    })

    it('should define the id as an integer autoincrement on the new task', function() {
      crud.addTask()
      crud.addTask()
      crud.addTask()
      crud.addTask()
      const lengthOfTasks = db.get("tasks").value().length
      const lastTask = db.get("tasks").value()[lengthOfTasks - 1]

      assert.equal(lastTask.id, 4)
    })

    it('should set completed as false if it is undefined', function() {
      crud.addTask()
      const tasks = db.get("tasks").value()
      const taskAdded = tasks[0]

      assert.isFalse(taskAdded.completed)
    })

    it('should set completed as false if it is a number', function() {
      crud.addTask(2)
      const tasks = db.get("tasks").value() //[{}]
      const taskAdded = tasks[0] // {id, completed}
      assert.isFalse(taskAdded.completed)
    })

    it('should set completed as false if it is a string value', function() {
      crud.addTask("a")
      const tasks = db.get("tasks").value() //[{}]
      const taskAdded = tasks[0] // {id, completed}
      assert.isFalse(taskAdded.completed)
    })

    it('should set completed as false if it is false value', function() {
      crud.addTask(false)
      const tasks = db.get("tasks").value() //[{}]
      const taskAdded = tasks[0] // {id, completed}
      assert.isFalse(taskAdded.completed)
    })

    it('should set completed as true if it is true value', function() {
      crud.addTask(true)
      const tasks = db.get("tasks").value() //[{}]
      const taskAdded = tasks[0] // {id, completed}
      assert.isTrue(taskAdded.completed)
    })

    it('should return the task added', function() {
      const taskAdded = crud.addTask()
      assert.deepEqual(taskAdded, {id: 1, completed: false})
    })

    it('should require an id, title, completed', function() {})
    it('should ignore no supported properties', function() {})
    it('should capatilize just the first letter of the title', function() {})
  })
})
