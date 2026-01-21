import express from "express";
import {
  fetchAllTasks,
  addTask,
  toggleTaskStatus,
  removeTask
} from "../controllers/todoController.js";

const taskRouter = express.Router();

// Read all tasks
taskRouter.route("/")
  .get(fetchAllTasks)
  .post(addTask);

// Update task status
taskRouter.patch("/:id", toggleTaskStatus);

// Delete task
taskRouter.delete("/:id", removeTask);

export default taskRouter;
