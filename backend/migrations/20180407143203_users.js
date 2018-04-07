
exports.up = function(knex, Promise) {
  return knex.schema
  .createTableIfNotExists('users', function (user){
   user.increments('id').primary()
   user.timestamp('create_at').notNullable().defaultTo(knex.fn.now())
   user.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
   user.string('name').notNullable()
   user.string('fb_id')
        .notNullable()
        .unique()
    user.string('email')
        .notNullable()
        .unique()
    user.string('picture_url')
        .notNullable()
        .unique()
  }).createTableIfNotExists('watchlists', function (watchlist){
      watchlist.integer(user_id).unique().references(id).inTable(users)
      watchlist.json('movies')
  }).createTableIfNotExists('watchedlists', function (watchedlist){
      watchedlist.integer(user_id).unique().references(id).inTable(users)
      watchedlist.json('movies')
  }).createTableIfNotExists('fb', function (fb){
      fb.integer(user_id).unique().references(id).inTable(users)
      fb.json('movies')
  })
};

exports.down = function(knex, Promise) {
   return knex.schema
   .dropTable('users')
   .dropTable('watchlists')
   .dropTable('watchedlists')
   .dropTable('fb')
};
