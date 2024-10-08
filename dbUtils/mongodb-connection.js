import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // only in local we are loading the .env into the system

// console.log("################################");
// console.log(process.env);
// console.log("################################");

const dbUrl = "localhost:27017";
const dbName = process.env.DB_NAME || "forgotpassword";

// username & password will be required on connecting to cloud DB
const dbPassword = process.env.DB_PASSWORD || "";
const dbUsr = process.env.DB_USERNAME || "";
const dbCluster = process.env.DB_CLUSTER || "";

// Creating a client instance
const localUrl = `mongodb://${dbUrl}`;

const cloudUrl = `mongodb+srv://${dbUsr}:${dbPassword}@${dbCluster}/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(localUrl);

// Selecting a particular DB-Name
const db = client.db(dbName);

// Connecting to the asynchronously
const connectToDb = async () => {
  try {
    await client.connect();
    console.log("DB Connected Successfully");
  } catch (e) {
    console.log("Error connecting to database", e);
    process.exit(1);
  }
};

export { db, client };

export default connectToDb;
