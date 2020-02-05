export const knex = require("knex")({
  client: "mysql",
  connection: {
    user: "root",
    password: "",
    database: "recipes"
  }
});
