const express = require("express");
const cors = require("cors");
const Dotenv = require("dotenv");
const app = express();
app.use(cors());
Dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
