exports.up = (knex, Promise) => {
  return knex.schema.createTable('videos', (table) => {
    table.increments("id").primary();
    table.string('name');
    table.string('url');
    table.number("watch_count");
    table.foreign("user_uuid").references("users.uuid")
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('videos');
};