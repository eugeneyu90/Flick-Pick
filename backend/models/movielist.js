const movielist = bookshelf.model.extend({
  tableName: 'movelists',
  users: function(){
    return this.belongsTo(users)
  }
})

module.exports = movelists