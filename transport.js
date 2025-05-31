// handlers/myHandler.js
const db = require('../db'); // Example: real database connection

async function myHandler(input) {
  try {
    const data = await db.query('SELECT * FROM users WHERE id = ?', [input.userId]);
    return {
      status: 200,
      body: data
    };
  } catch (error) {
    return {
      status: 500,
      body: { error: error.message }
    };
  }
}

module.exports = myHandler;