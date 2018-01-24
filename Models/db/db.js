const pgp = require('pg-promise')({noWarnings: true})

let connection
if(process.env.NODE_ENV === 'test') {
  connection = "postgres://localhost:5432/todolisttest"
} else {
  connection = process.env.DATABASE_URL
}

const db = pgp(connection)

module.exports = { db }; 