import express from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/todoRoutes.js";

dotenv.config();

const server = express();

// Middleware to parse JSON requests
server.use(express.json());

// API endpoints
server.use("/api/tasks", taskRoutes);

// Health check route
server.get("/", (req, res) => {
  res.status(200).send("Task Management API is active");
});

export default server;
