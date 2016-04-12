exports.up = function(knex, Promise) {
  return knex.schema.createTable('tokens', function(t){
    t.increments();
    t.string('token');
    t.timestamps();
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tokens');
};
