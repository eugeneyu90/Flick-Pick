// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'flickpick',
      user:     'eugeneyu',
      password: 'eugeneyu'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
