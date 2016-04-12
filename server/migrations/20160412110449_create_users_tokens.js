exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_tokens', function(t){
      t.increments();
      t.integer('user_id').references('users.id');
      t.integer('token_id').references('tokens.id');
    }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_tokens');
};
