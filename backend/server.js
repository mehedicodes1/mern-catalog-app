import express from "express";
import { connectdb } from "./config/db.js";
import Product from "./models/products.js";

const app = express();
app.use(express.json());

app.post("/api/products", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all fields" });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error while adding product", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectdb();
});
