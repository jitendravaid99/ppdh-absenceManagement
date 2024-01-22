const  { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'absDB',
  password: 'postgres1234',
  port: 5432,
});

module.exports = pool;

