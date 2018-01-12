const db = require('./db/queries')

module.exports = {
  create: db.createTask,
  update: db.updateTask,
  edit: db.editTask,
  delete: db.deleteTask
}