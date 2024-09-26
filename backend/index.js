const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const PORT = 8000;
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose
  .connect(uri)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Failed to connect to the database", err));

// Schema for the user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  category: String,
  expertise: String,
  industries: String,
  stages: String,
  location: String,
  language: String,
});

const User = mongoose.model("User", userSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the backend, user!!!");
});

// Register User
app.post("/register", async (req, res) => {
  const user = req.body;

  try {
    const newUser = new User(user);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to register user" });
  }
});

// List All Users
app.get("/user", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});
app.post("/user", async (req, res) => {
  try {
    const users = await User.find().toArray().reverse();
    res.send(users);
  } catch (err) {
    res.send(500).json({ error: "Failed to display users" });
  }
});
app.post("/loggedInUser", async (res, req) => {
  const email = req.query.email;
  const user = await User.find({ email: email }).toArray();
  res.send(user);
});
app.patch("/userUpdates", async (req, res) => {
  const email = req.body;
  const profileUpdates = req.body;

  const filter = email;

  try {
    const existingUser = await User.find(filter).toArray();

    if (!existingUser) {
      return res
        .status(404)
        .send({ message: "User not found, no document updated" });
    }

    const validUpdates = Object.fromEntries(
      Object.entries(profileUpdates).filter(
        ([key, value]) => value != null && value !== ""
      )
    );

    if (Object.keys(validUpdates).length === 0) {
      return res
        .status(400)
        .send({ message: "No valid fields provided for update" });
    }
    const updateDoc = { $set: validUpdates };
    const result = await User.updateOne(filter, updateDoc);

    if (result.matchedCount === 0) {
      return res
        .status(404)
        .send({ message: "User not found, no document updated" });
    }

    console.log("Database Update Result:", result);
    res.send(result);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
