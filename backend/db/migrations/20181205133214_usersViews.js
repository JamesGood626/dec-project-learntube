exports.up = (knex, Promise) => {
  return knex.schema.createTable('userViews', table => {
    table.increments('uuid');
    table.string('userName');
    table.unique('email');
    table.string('password');
    table.bool('isAdmin');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('userViews');
};
