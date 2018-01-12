const express = require('express')
const router = express.Router()
const task = require('../../../Models/tasks')
const { getAllData } = require('../../../Test/utilities/dbUtilities')

router.get('/getBooks', (req, res) => {
  return getAllData()
    .then(task => {
      console.log(task)
      res.json(task)
    })
})

router.post('/create', (req, res) => {
  const { todoItem } = req.body
  return task.create(todoItem)
    .then((task) => {
      console.log(task)
      res.json(task)
    })
    .catch(console.error)
})

router.put('/update/:id', (req, res) => {
  const { id } = req.params
  const { task, complete } = req.body
  task.updateTask(id, task, complete)
    .then(task => {
      res.json(task)
    })
    .catch(console.error)
})

router.put('/edit/:id', (req, res) => {
  const { id } = req.params
  const { task, complete } = req.body
  task.updateTask(id, task, complete)
    .then(task => {
      res.json(task)
    })
    .catch(console.error)
})

router.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  return task.delete(id)
    .then(task => {
      res.json(task)
    })
    .catch(console.error)
})

module.exports = router