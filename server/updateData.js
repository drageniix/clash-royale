/*eslint-disable*/

const { Client } = require('pg');

const write = require('./writeDatabase');
const read = require('./readDatabase');

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});

client
    .connect()
    .then(() => write(client))
    .then(() => read(client))
    .catch(err => console.log(err))
    .finally(() => client.end());
