export const knex = require("knex")({
  client: "mysql",
  connection: {
    user: "root",
    password: "Nofat1050",
    database: "recipes"
  }
});
