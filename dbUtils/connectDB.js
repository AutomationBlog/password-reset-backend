import mongoose from "mongoose";

export const connectDB = async () => {
  const dbUrl = "localhost:27017";
  const dbName = process.env.DB_NAME || "forgotpassword";
  try {
    const conn = await mongoose.connect("mongodb://" + dbUrl + "/" + dbName);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
