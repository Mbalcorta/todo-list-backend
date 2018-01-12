const { db } = require('../../models/db/db')

const resetDB = () => {
  const tables = ['users', 'taskBox', 'users_taskBox', 'tasks', 'taskBox_tasks']
  return Promise.all(tables.map(table => 
    db.any(`TRUNCATE TABLE ${table} RESTART IDENTITY CASCADE`)
    )
  ).catch(console.error)
}

const getAllData = () => {
  return db.any('SELECT * FROM tasks')
}

module.exports = { resetDB, getAllData }