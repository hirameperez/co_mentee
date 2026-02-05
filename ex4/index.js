require('dotenv').config();
const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");

const PORT = process.env.PORT || 3100;

const app = express();
app.use(express.json());

const taskDB = new Sequelize({
  dialect: process.env.DB_DIALECT || "postgres",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || "tasks_db",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD,
  logging: false,
  
});

const Task = taskDB.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

(async () => {
  try {
    await taskDB.authenticate();
    console.log("Connected to PostgreSQL");

    await taskDB.sync();
    console.log("Tables created correctly");
  } catch (error) {
    console.error("Error in DB:", error);
  }
})();

app.post("/tasks", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/debug/db", async (req, res) => {
  try {
    const tables = await taskDB.getQueryInterface().showAllTables();
    const tasks = await Task.findAll();

    res.json({
      tables,
      total: tasks.length,
      tasks,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    res.json(task || { error: "not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      task.completed = !task.completed;
      await task.save();
      res.json(task);
    } else {
      res.status(404).json({ error: "does not exist" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    await Task.destroy({ where: { id: req.params.id } });
    res.json({ message: "deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () =>
  console.log(`Server ready on http://localhost:${PORT}`),
);
