import express from "express";
import * as path from "path";
import {
  add_ingredient,
  get_all,
  get_by_id,
  udpate_ingredient
} from "./backend/ingredient_controller";

const app = express();
app.use(express.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// An api endpoint that returns a short list of items
app.get("/heartbeat", (req, res) => {
  res.json("ok");
  console.log("Sent list of items");
});

// Ingredient Routes

app.put("/ingredients/:ingredient_id", async (req, res) => {
  console.log(req);
  const response = await udpate_ingredient(req.body, req.params.ingredient_id);
  res.json(response);
});

app.post("/ingredients", async (req, res) => {
  const response = await add_ingredient(req.body);
  res.json(response);
});

app.get("/ingredients", async (req, res) => {
  const response = await get_all();
  res.json(response);
});

app.get("/ingredients/:ingredient_id", async (req, res) => {
  const response = await get_by_id(req.params);
  res.json(response);
});

// Handles any requests that don't match the ones above
// Stay at the bottoms
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
