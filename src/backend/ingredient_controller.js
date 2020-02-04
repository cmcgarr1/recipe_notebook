import { knex } from "./knex";

//const res = await client.query('SELECT $1::text as message', ['Hello world!'])
//console.log(res.rows[0].message) // Hello world!

export const add_ingredient = async params => {
  const name = params.name;
  if (name === null) {
    return {};
  }

  let res = {};
  try {
    const response = await knex("ingredients").insert({ name });
    res = "OK";
  } catch (err) {
    console.log(err.stack);
  } finally {
    return res;
  }
};

export const get_all = async () => {
  let res = {};
  try {
    res = await knex.select().table("ingredients");
    console.log(res);
  } catch (err) {
    console.log(err.stack);
  } finally {
    return res;
  }
};

export const get_by_id = async params => {
  let res = {};
  try {
    const response = await knex("ingredients").where({
      id: params.ingredient_id
    });
    console.log(response);
    res = response[0];
  } catch (err) {
    console.log(err.stack);
  } finally {
    return res;
  }
};

export const udpate_ingredient = async (params, ingredient_id) => {
  const name = params.name;
  if (name === null) {
    return {};
  }

  console.log(params);
  let res = {};
  try {
    const response = await knex("users")
      .where({
        id: ingredient_id
      })
      .update({ name });
    console.log(response);
    res = response[0];
  } catch (err) {
    console.log(err.stack);
  } finally {
    return res;
  }
};
