import express from "express";
import cors from "cors";
import Dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./dbUtils/connectDB.js";
const app = express();
const corsConfig = {
  credentials: true,
  origin:
    process.env.isLOCAL === "true"
      ? process.env.CLIENT_URL_LOCAL
      : process.env.CLIENT_URL_CLOUD,
};
app.use(cors(corsConfig));
Dotenv.config();
app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming requests:req.cookies

app.get("/", (req, res) => {
  res.send("User Authentication Backend API");
});

app.use("/api/auth", authRoutes);

// app.use("/users", usersRouter); // Users Router

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
