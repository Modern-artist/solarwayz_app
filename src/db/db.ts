import mongoose from "mongoose";

// Establish the database connection
export async function connectToDatabase() {
  try {
    console.log(
      "trying to connect to db with process variable",
      process.env.mongo
    );
    await mongoose.connect(process.env.mongo!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

// Call the connectToDatabase function to establish the connection
// connectToDatabase();
