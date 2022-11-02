const { MongoClient } = require("mongodb");
require("dotenv").config();

let db;

async function connectToDb() {
  const url = process.env.DB_URL || "mongodb://localhost/JDB";
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  console.log("Connected to MongoDB");
  db = client.db();
}

async function getNextSequence(name) {
  const result = await db
    .collection("counters")
    .findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { returnOriginal: false },
    );
  return result.value.current;
}

function getDb() {
  return db;
}

module.exports = { getDb, connectToDb, getNextSequence };
