import mongoose from "mongoose";

async function initializeDatabase() {
  try {
    const dbUrl = process.env.MONGO_URI;

    await mongoose.connect(dbUrl);

    console.log("Database connection successful");
  } catch (err) {
    console.error("Error connecting to database:", err);
    process.exit(1);
  }
}

export default initializeDatabase;
