const  { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: '/cloudsql/ingka-pdpp-absence-dev:europe-west4:ppdh-absence-dev-db',
  database: 'absenceDB',
  password: 'postgres1234',
  port: 5432,
});

module.exports = pool;

