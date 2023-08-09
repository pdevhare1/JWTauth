const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const authRoutes = require("./routes/auth");
const User = require("./models/user");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const atlasUri =
  "mongodb+srv://your_link";

mongoose
  .connect(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  jwt.verify(token, "su%qt4MFw6VFL3xxAmhv", (err, decoded) => {
    if (err) {
      return res.status(401).send("Unauthorized");
    }
    req.userId = decoded.userId;
    next();
  });
}

app.use("/api/auth", authRoutes);

app.get("/api/protected", verifyToken, async (req, res) => {
  try {
    const userId = req.userId;
    const userData = await User.findById(userId);

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
