const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.

let db;

async function mongoConnect() {
  try {
    const uri = process.env.ATLAS_URI;
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db("Bekdi");
    db = database;
  } catch (error) {
    console.log(error);
  }
}

function getDb() {
  return db;
}

module.exports = {
  mongoConnect,
  getDb,
};
