const { UserInputError } = require("apollo-server-express");
const { getDb, getNextSequence } = require("./db.js");

async function add(_, { tiffin }) {
  const db = getDb();
  validate(tiffin);

  tiffin.created = new Date();
  tiffin.id = await getNextSequence("tiffins");
  console.log("Fetched id ", tiffin.id);

  const result = await db.collection("tiffin").insertOne(tiffin);
  const savedTiffin = await db
    .collection("tiffin")
    .findOne({ _id: result.insertedId });
  return savedTiffin;
}
function validate(tiffin) {
  const errors = [];
  if (tiffin.brand < 3) {
    errors.push("Field 'brand' must be at least 3 characters long");
  }
  if (tiffin.rating > 5) {
    errors.push("Field rating must be b/w 1 - 5");
  }
  if (!tiffin.img) {
    // errors.push("Field img not be empty ");
  }

  if (errors.length > 0) {
    throw new UserInputError("Invalid input(s)", { errors });
  }
}

async function list(_, { filterTobeupdate }) {
  const db = getDb();

  const filter = {};

  const tiffins = await db.collection("tiffin").find(filter).toArray();
  return tiffins;
}

module.exports = { list, add };
