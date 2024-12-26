import env from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

env.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Databse connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

//   Routes Configuration

//   Global Error Handler
app.use((err, req, res, next) => {
  console.log("From Global Error Handler, Error: ", err.stack);
  res
    .status(500)
    .json({ success: false, from: "Global Error Handler", message: err.stack });
});

//   Listen to port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
