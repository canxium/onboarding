const { Client } = require('pg');
const {
    pgUrl
  } = require('@config/constants');
 
const client = new Client({
    connectionString: pgUrl
});

exports.pgClient = client;