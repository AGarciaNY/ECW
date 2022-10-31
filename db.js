const { Pool } = require('pg')

const connectionDevelopment = {
    database: 'todo-list',
    user: 'aldair',
    password: 'a',
    host: 'localhost',
    port: 5432
}
const connectionProduction = {
  connectionString: process.env.DATABASE_URL,
  ssl: {rejectUnauthorized: false}
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionDevelopment)

module.exports = pool