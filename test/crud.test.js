const assert = require('chai').assert
const crud = require('./crud.js')

describe("Testing CRUD Methods", function () {
  describe("Testing addTask", function() {
    before(function () {
      console.log("before")
    });
  
    after(function () {
      console.log("after")
    });
  
    beforeEach(function () {
      crud.tasks = []
      console.log("beforeEach")
    });
  
    afterEach(function () {
      console.log("afterEach")
    });

    //before

    //beforeEach
    it('should start as empty array', function() {})
    //afterEach

    //beforeEach
    it('should define the id as an integer autoincrement', function() {})
    //afterEach

    it('should define completed as false if it is not defined', function() {})
    it('should ignore if completed is a non boolean type', function() {})
    it('should return the task added', function() {})
    it('should require an id, title, completed', function() {})
    it('should ignore no supported properties', function() {})
    it('should capatilize just the first letter of the title', function() {})
    //after
  })
})