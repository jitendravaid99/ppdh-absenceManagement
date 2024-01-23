const  { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || '/cloudsql/ingka-pdpp-absence-dev:europe-west4:ppdh-absence-dev-db',
  database: process.env.DB_NAME || 'absenceDB',
  password: process.env.DB_PASSWORD || 'postgres1234',
  port: process.env.DB_PORT || 5432,
});

module.exports = pool;

