import express from "express";
import { db } from "../dbUtils/mongodb-connection.js";

const userDBrouter = express.Router();

export default userDBrouter;

const collection = db.collection("users");

// Create New User
userDBrouter.post("/create", async (req, res) => {
  const { name, email, password } = req.body;
  const user = { name, email, password };
  try {
    const result = await collection.insertOne(user);
    res.status(201).send({ msg: "Student Created Successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

// Get All Users
userDBrouter.get("/", async (req, res) => {
  const result = await collection.find({}).toArray();
  res.send(result);
});

// Get Single User
userDBrouter.get("/:userid", async (req, res) => {
  const { userid } = req.params.userid;
  try {
    const result = await collection.findOne(
      (users) => users.name == userid.toString()
    );
    res.send({ msg: "Info about the single student " + userid, result });
  } catch (e) {
    console.log(e);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});
