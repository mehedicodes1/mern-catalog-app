import express from "express";
import { connectdb } from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/routes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectdb();
}); // start server
