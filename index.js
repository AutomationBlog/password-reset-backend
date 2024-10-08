import express from "express";
import cors from "cors";
import Dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./dbUtils/connectDB.js";
const app = express();
app.use(cors());
Dotenv.config();
app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming requests:req.cookies

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
