const Sequelize = require('sequelize');
const databaseUrl = process.env.DTABASE_URL || 'postgres://postgres:alexander@localhost:5432/postgres';
const db = new Sequelize(databaseUrl);

db
 .sync()
 .then(() => console.log('Database schema updated'))
 .catch(console.error)

module.exports = db;