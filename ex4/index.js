const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const PORT = process.env.PORT || 3100;

const app = express();
app.use(express.json());

const taskDB = new Sequelize({
  dialect: "sqlite",
  storage: "./tareas.db",
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
    console.log("Conectado a SQLite");

    await taskDB.sync();
    console.log("Tabla creada correctamente");
  } catch (error) {
    console.error(" Error en BD:", error);
  }
})();

app.post("/tasks", async (req, res) => {
  const tarea = await Task.create(req.body);
  res.json(tarea);
});

app.get("/tasks", async (req, res) => {
  const tareas = await Task.findAll();
  res.json(tareas);
});

app.get("/debug/db", async (req, res) => {
  const tablas = await taskDB.getQueryInterface().showAllTables();
  const tareas = await Task.findAll();

  res.json({
    tablas,
    total: tareas.length,
    tareas,
  });
});

app.get("/tasks/:id", async (req, res) => {
  const tarea = await Task.findByPk(req.params.id);
  res.json(tarea || { error: "No encontrada" });
});

app.put("/tasks/:id", async (req, res) => {
  const tarea = await Task.findByPk(req.params.id);
  if (tarea) {
    tarea.completed = !tarea.completed;
    await tarea.save();
    res.json(tarea);
  } else {
    res.status(404).send("No existe");
  }
});

app.delete("/tasks/:id", async (req, res) => {
  await Task.destroy({ where: { id: req.params.id } });
  res.send("Eliminada");
});

app.listen(PORT, () =>
  console.log(`Servidor listo en http://localhost:${PORT}`),
);
