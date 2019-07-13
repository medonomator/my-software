import * as faker from 'faker';
import * as mysql from 'mysql2/promise';
import logger from '../helpers/logger';

const USERS = 'users';
const NOTES = 'notes';

async function createInitialDataBaseAndTables() {
  let conMsql;
  try {
    logger.info('Connect current database');
    conMsql = await mysql.createConnection({
      host: process.env.HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '1234',
      database: process.env.DB_NAME || 'mydb',
    });
  } catch (error) {
    logger.info('Create new database');
    conMsql = await mysql.createConnection({
      host: process.env.HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '1234',
    });
    conMsql.query('CREATE DATABASE IF NOT EXISTS mydb CHARACTER SET utf8');
  }

  const sqlCreateTableNotes = `CREATE TABLE IF NOT EXISTS ${NOTES}
    (id INT AUTO_INCREMENT PRIMARY KEY,
    header VARCHAR(255),
    description VARCHAR(255),
    body TEXT,
    created_at timestamp default current_timestamp,
    userId INT)
  `;

  const slqCreateTableUsers = `CREATE TABLE IF NOT EXISTS ${USERS}
    (id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255),
    name VARCHAR(255),
    address VARCHAR(255),
    avatarUrl VARCHAR(255),
    city VARCHAR(255),
    interests TEXT,
    about TEXT,
    age INT,
    sex BOOLEAN,
    birthDate DATE,
    role VARCHAR(50) DEFAULT 'user',
    status VARCHAR(50) DEFAULT 'newbie')
  `;


  const slq = `CREATE TABLE IF NOT EXISTS usersP
    (id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    d_id VARCHAR(255))
  `;

  const slq2 = `CREATE TABLE IF NOT EXISTS departments
    (id INT AUTO_INCREMENT PRIMARY KEY,
    position VARCHAR(255))
  `;

  await conMsql.query(sqlCreateTableNotes);
  await conMsql.query(slqCreateTableUsers);
  await conMsql.query(slq);
  await conMsql.query(slq2);

  logger.info('Create table complete');
}

createInitialDataBaseAndTables();

async function fillInitialDataBaseAndTables() {
  const conMsql = await mysql.createConnection({
    host: process.env.HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '1234',
    database: process.env.DB_NAME || 'mydb',
  });

  const randomName = faker.name.findName()

  const sql = `INSERT INTO departments (position)
    VALUES ('Старший')`


  const query = await conMsql.query(sql);
  console.log(query);

  conMsql.end();
}

fillInitialDataBaseAndTables();

// setInterval(() => {
//   const randomEmail = faker.internet.email()
//   const randomName = faker.name.findName()
//   const randomAge = Math.round(Math.random() * 100);

//   const sql = `INSERT INTO users (email, password, name, age) VALUES ('${randomEmail}', '1234', '${randomName}', ${Number(randomAge)})`
// },);
// setInterval(() => {
//   const randomEmail = faker.internet.email()
//   const randomName = faker.name.findName()
//   const randomAge = Math.round(Math.random() * 100);

//   const sql = `INSERT INTO notes (header, description, body, userId)
//     VALUES ('Example Header', 'example description', 'example body', ${Number(randomAge)})`

//   conMsql.query(sql, (err, result) => {
//     if (err) {
//       console.log(err);

//       logger.info('New user registered');
//     }

//     console.log(result);

//   })
// }, 10)
// }, 10
// setInterval(() => {
//   const randomEmail = faker.internet.email()
//   const randomName = faker.name.findName()
//   const randomAge = Math.round(Math.random() * 100);

//   const sql = `INSERT INTO notes (header, description, body, userId)
//     VALUES ('Example Header', 'example description', 'example body', ${Number(randomAge)})`

//   conMsql.query(sql, (err, result) => {
//     if (err) {
//       console.log(err);

//       logger.info('New user registered');
//     }

//     console.log(result);

//   })
// }, 10))

// setInterval(() => {
//   const randomEmail = faker.internet.email()
//   const randomName = faker.name.findName()
//   const randomAge = Math.round(Math.random() * 100);

//   const sql = `INSERT INTO notes (header, description, body, userId)
//     VALUES ('Example Header', 'example description', 'example body', ${Number(randomAge)})`

//   conMsql.query(sql, (err, result) => {
//     if (err) {
//       console.log(err);

//       logger.info('New user registered');
//     }

//     console.log(result);

//   })
// }, 10)

// const sql = `SELECT * FROM notes INNER JOIN users ON notes.userId = users.age`
// const sql = `SELECT body FROM notes`

// conMsql.query(sql, (err, result) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(result.length);
//   console.log(result);

//   result.map(item => {
//     console.log(item.id);

//   })

// });
