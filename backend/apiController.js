// API controller
const pool = require('./db')


const getData = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM absenceTable');
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const postData = async (req, res) => {
  const { personId, absenceType, subAbsenceType, startDate, endDate } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO absenceTable(personId, absenceType, subAbsenceType, startDate, endDate) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [personId, absenceType, subAbsenceType, startDate, endDate]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getDataByPersonId = async (req, res) => {
  const { personId } = req.query;

  try {
    if (personId) {
      const result = await pool.query('SELECT * FROM absenceTable WHERE personId = $1', [personId]);

      if (result.rows.length === 0) {
        res.status(404).json({ error: 'Data not found for the specified personId' });
      } else {
        res.json(result.rows[0]);
      }
    } else {
      const result = await pool.query('SELECT * FROM absenceTable');
      res.json(result.rows);
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getData, postData, getDataByPersonId };
