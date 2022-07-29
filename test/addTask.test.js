const assert = require('chai').assert

const db = require("./db")
const crud = require('./crud.js')

describe.only("Testing CRUD Methods", function () {
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
      crud.addTask("Titulo");
      crud.addTask("Titulo");
      const lengthOfTasks = db.get("tasks").value().length
      const lastTask = db.get("tasks").value()[lengthOfTasks - 1]

      assert.equal(lastTask.id, 2)
    })

    it('should set the property completed as false if it is undefined', function() {
      crud.addTask("Titulo");
      const tasks = db.get("tasks").value()
      const taskAdded = tasks[0]

      assert.isFalse(taskAdded.completed)
    })

    it('should set the property completed as false if it is a number', function() {
      crud.addTask("Titulo", 2)
      const tasks = db.get("tasks").value() //[{}]
      const taskAdded = tasks[0] // {id, completed}
      assert.isFalse(taskAdded.completed)
    })

    it('should set completed as false if it is a string value', function() {
      crud.addTask("Titulo", "a")
      const tasks = db.get("tasks").value() //[{}]
      const taskAdded = tasks[0] // {id, completed}
      assert.isFalse(taskAdded.completed)
    })

    it('should set completed as false if it is false value', function() {
      crud.addTask("Titulo", false)
      const tasks = db.get("tasks").value() //[{}]
      const taskAdded = tasks[0] // {id, completed}
      assert.isFalse(taskAdded.completed)
    })

    it('should set completed as true if it is true value', function() {
      crud.addTask("Titulo", true)
      const tasks = db.get("tasks").value() //[{}]
      const taskAdded = tasks[0] // {id, completed}
      assert.isTrue(taskAdded.completed)
    })

    it('should return the task added', function() {
      const taskAdded = crud.addTask("Titulo")
      assert.deepEqual(taskAdded, {id: 1, completed: false, title:"Titulo"})
    })

    it('should require an id, title, completed', function() {
      const taskAdded = crud.addTask("Titulo", false)
      assert.deepEqual(taskAdded, {id:1, title:"Titulo", completed:false});
    })

    it('should to accept only string values', function(){
      let message = crud.addTask(5);
      assert.equal( message, "Title must be string");

      message = crud.addTask(false);
      assert.equal( message, "Title must be string");

      message = crud.addTask([]);
      assert.equal( message, "Title must be string");

      message = crud.addTask({});
      assert.equal( message, "Title must be string");

      message = crud.addTask(null);
      assert.equal( message, "Title must be string");

    })

    it('should ignore all properties after second one', function() {
      let taskAdded = crud.addTask("Titulo", false, 5);
      assert.deepEqual(taskAdded, {id:1, completed:false, title:"Titulo"});

    })

    it("should return a message if title is undefined", function() {
      let message = crud.addTask();
      assert.equal(message, "Title is needed");
    })

    it('should capatilize just the first letter of the title', function() {
      const taskAdded = crud.addTask("namE");
      assert.deepEqual(taskAdded, {id:1, title:"Name", completed:false});
    })
  })
})
