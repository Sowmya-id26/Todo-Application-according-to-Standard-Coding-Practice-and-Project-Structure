import TaskModel from "../models/todoModel.js";

// FETCH all tasks
export const fetchAllTasks = async (req, res) => {
  try {
    const taskList = await TaskModel.find({});
    res.status(200).send(taskList);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// ADD new task
export const addTask = async (req, res) => {
  try {
    const { taskName } = req.body;

    if (!taskName) {
      return res.status(400).send({ error: "Task name cannot be empty" });
    }

    const newTask = await TaskModel.create({ taskName });

    res.status(201).send(newTask);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// MODIFY task status
export const toggleTaskStatus = async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await TaskModel.findById(taskId);

    if (!task) {
      return res.status(404).send({ error: "Task not found" });
    }

    task.isDone = !task.isDone;
    await task.save();

    res.status(200).send(task);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// REMOVE task
export const removeTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    const deletedTask = await TaskModel.findById(taskId);

    if (!deletedTask) {
      return res.status(404).send({ error: "Task does not exist" });
    }

    await deletedTask.deleteOne();

    res.status(200).send({ success: "Task removed successfully" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
