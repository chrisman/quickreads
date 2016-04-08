exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('books', function(t){
      t.increments();
      t.string('title');
      t.string('author');
      t.string('descrition');
      t.string('cover_url');
      t.string('isbn');
      t.string('url');
      t.integer('rating');
      t.timestamps();
    })
    .createTable('users_books', function(t){
      t.increments();
      t.integer('user_id').references('users.id');
      t.integer('book_id').references('books.id');
      t.json('json_data');
    }); 
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('books')
    .dropTable('users_books'); 
};
