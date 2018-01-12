const { db } = require('./db')

const createTask = (task) => {
  return db.one('INSERT INTO tasks(task) VALUES($1) RETURNING *', [task])
}

const updateTask = (id, task, complete) => {
  return db.one('UPDATE tasks SET task=$2, complete=$3 WHERE id=$1 RETURNING *', [id, task, complete])
}

const editTask = (id, task, complete) => {
  return db.one('UPDATE tasks SET task=$2, complete=$3 WHERE id=$1 RETURNING *', [id, task, complete])
}

const deleteTask = (id) => {
  return db.oneOrNone('DELETE FROM tasks WHERE id=$1 RETURNING *', id)
}

module.exports = { createTask, updateTask, editTask, deleteTask }