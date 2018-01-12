const pgp = require('pg-promise')({noWarnings: true})

const connection = process.env.NODE_ENV === 'test'
? "postgres://localhost:5432/todolisttest"
: process.env.DATABASE_URL;

const db = pgp(connection)

module.exports = { db }; 