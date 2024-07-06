import express from "express";
import cors from "cors";
import Dotenv from "dotenv";

import connectToDb from "./dbUtils/mongodb-connection.js";
import usersRouter from "./routes/users_db.js";
const app = express();
app.use(cors());
Dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

await connectToDb();

app.use("/users", usersRouter); // Users Router

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
