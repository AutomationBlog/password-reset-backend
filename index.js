import express from "express";
import cors from "cors";
import Dotenv from "dotenv";

import connectToDb from "./dbUtils/mongodb-connection.js";
import usersRouter from "./routes/users_db.js";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./dbUtils/connectDB.js";
const app = express();
app.use(cors());
Dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("User Management Backend API");
});

app.use("/api/auth", authRoutes);

// app.use("/users", usersRouter); // Users Router

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
