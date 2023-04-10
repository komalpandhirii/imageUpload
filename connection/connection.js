const config = require('../connection/config');

const knex = require('knex')({
      client: 'mysql',
      connection: {
        host : config.host,
        user : config.user,
        password : config.password,
        database : config.database
      }
    })
  
  module.exports = knex;