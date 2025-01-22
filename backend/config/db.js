import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected successfully ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection failed");
    console.log(error);
  }
};
