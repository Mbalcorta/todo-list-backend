require('dotenv').config();
const express = require('express')
const app = express()
// const router = express.Router()
const task = require('./Models/tasks')
const { getAllData } = require('./Test/utilities/dbUtilities')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/getTasks', (req, res) => {
  return getAllData()
    .then(task => {
      res.json(task)
    })
})

app.post('/create', (req, res) => {
  const { todoItem } = req.body
  return task.create(todoItem)
    .then((task) => {
      res.json(task)
    })
    .catch(console.error)
})

app.put('/update/:id', (req, res) => {
  const { id } = req.params
  const { todoItem, complete } = req.body
  task.update(id, todoItem, complete)
    .then(task => {
      res.json(task)
    })
    .catch(console.error)
})

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  return task.delete(id)
    .then(task => {
      res.json(task)
    })
    .catch(console.error)
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});

// module.exports = router