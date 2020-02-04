exports.up = function(knex) {
  return knex.schema.createTable("ingredients_recipes", function(t) {
    t.increments("id").primary();
    t.integer("ingredient_id");
    t.integer("recipe_id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ingredients_recipes");
};
