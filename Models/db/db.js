const pgp = require('pg-promise')({noWarnings: true})

const connection = process.env.NODE_ENV === 'test'
? "postgres://localhost:5432/todolisttest"
: "postgres://localhost:5432/todolist"

const db = pgp(connection)

module.exports = { db }; 