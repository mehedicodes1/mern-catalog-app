import express from "express";
import { connectdb } from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Call connectdb when the server starts
app.listen(3000, async () => {
  try {
    await connectdb();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Failed to connect to the database", error);
  }
});
