exports.up = function(knex) {
  return knex.schema.createTable("recipes", function(t) {
    t.increments("id").primary();
    t.string("name").notNullable();
    t.string("image");
    t.boolean("is_tech");
    t.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes");
};
