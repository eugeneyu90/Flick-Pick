const users = bookshelf.Model.extend({
  tableName: 'users',
  watchlist: function(){
    return this.hasOne(movelists)
  }
})

module.exports = users