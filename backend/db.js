const  { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: '34.141.149.241',
  database: 'absenceDB',
  password: 'postgres1234',
  port: 5432,
});

module.exports = pool;

