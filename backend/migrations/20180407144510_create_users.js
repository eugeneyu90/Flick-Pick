exports.up = function(knex, Promise) {
  return knex.schema.hasTable('users').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('name');
        table.string('email');
        table.integer('fb_id');
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
      }).createTable('watchlists', function(table) {
        table.increments('id').primary(); 
        table.json('movies');
        table.integer('user_id').references('users.id');
      }).createTable('watchedlists', function(table) {
        table.increments('id').primary(); 
        table.json('movies');
        table.integer('user_id').references('users.id');
      }).createTable('fb_likedlists', function(table) {
        table.increments('id').primary(); 
        table.json('movies');
        table.integer('user_id').references('users.id');
      }).table('users', function(table) {
        table
          .integer('watchlist_id')
          .references('id')
          .inTable('watchlists');
        table
          .integer('watchedlist_id')
          .references('id')
          .inTable('watchedlists');
        table
          .integer('fb_likedlist_id')
          .references('id')
          .inTable('fb_likedlists');
      })
    }
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
    .dropTable('watchlists')
    .dropTable('watchedlists')
    .dropTable('fb_likedlists');
};