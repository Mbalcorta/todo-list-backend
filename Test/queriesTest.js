const expect = require('chai').expect;
const tasks = require('../Models/tasks')
const { resetDB, getAllData } = require('./utilities/dbUtilities')

describe('createTask', function() {
  beforeEach('reset the database', resetDB)
  it('should update the task to walk the dog', function() {
    return tasks.create('walk the dog')
      .then(results => {
        expect(results.task).to.equal('walk the dog')
    })
  })
  it('should label complete status of task as false', function() {
   return tasks.create('walk the dog')
     .then(results => {
        expect(results.complete).to.equal('false')
    })
  })
  it('should add one task', function() {
    return tasks.create('walk the dog')
      .then(results => {
        expect(results.id).to.equal(1)
    })
  })
})

describe('updateTask', function() {
  describe('should update the task as true', function() {
    beforeEach('reset the database', function(){
      return resetDB()
              .then(function() {
                return tasks.create('walk the dog')
              })
    })
    it('should label complete status of task as true', function() {
      return tasks.update(1, 'true')
        .then(results => {
          expect(results.complete).to.equal('true')
      })
    })
  })
  describe('should update the task as false', function() {
    beforeEach('reset the database', function(){
      return resetDB()
              .then(function() {
                return tasks.create('walk the dog')
                        .then(function(){
                          return tasks.update(1, 'true')
                        })
              })
    })
    it('should label complete status of task as false', function() {
      return tasks.update(1, 'false')
        .then(results => {
          expect(results.complete).to.equal('false')
      })
    })
  })
})

describe('editTask', function() {
  beforeEach('reset the database', function(){
    return resetDB()
            .then(function() {
              return tasks.create('walk the dog')
            })
  })
  it('should edit the task from "walk the dog" to "walk with the kid"', function() {
    return tasks.edit(1, 'walk with the kid')
      .then(results => {
        expect(results.task).to.equal('walk with the kid')
    })
  })
})

describe('deleteTask', function() {
  describe('should delete only', function(){
    beforeEach('reset the database', function(){
      return resetDB()
      .then(function() {
        return tasks.create('walk the dog')
      })
      .then(function(){
        return tasks.delete(1)
      })
    })
    it('one task', function() {
      return getAllData()
        .then(results => {
          expect(results.length).to.equal(0)
        })  
    })  
  })
  describe('should only delete ', function() {
    beforeEach('reset the database', function(){
      return resetDB()
      .then(function() {
        return tasks.create('walk the dog')
      })
      .then(function() {
        return tasks.create('walk with the kid')
      })
      .then(function(){
        return tasks.delete(1)
      })
    })
    it('one task in a database with two task', function() {
      return getAllData()
        .then(results => {
          expect(results.length).to.equal(1)
        })  
    })  
  })
  describe('should only delete ', function() {
    beforeEach('reset the database', function(){
      return resetDB()
      .then(function() {
        return tasks.create('walk the dog')
      })
      .then(function() {
        return tasks.create('walk with the kid')
      })
    })
    it('"walk the dog" task', function() {
      return tasks.delete(1)
        .then(results => {
          expect(results.task).to.equal('walk the dog')
        })  
    })  
  })
})