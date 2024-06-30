const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://localhost:27017"; // Your MongoDB URI
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("mydb"); // Your database name
    const collection = db.collection("mycollection"); // Your collection name

    const document = { name: "John Doe", age: 30 };
    await collection.insertOne(document);
    console.log("Document inserted successfully");
  } finally {
    await client.close();
  }
}

main().catch(console.error);
