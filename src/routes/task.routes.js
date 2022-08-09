const express = require('express');
const TaskController = require('../controllers/task.controller');

const router = express.Router();

router.get('/tarefas', TaskController.getAllTasks);

router.get('/tarefas/:id', TaskController.getTaskById);

router.post('/tarefas', TaskController.createTask);

router.put('/tarefas/:id', TaskController.updateTask);

router.delete('/tarefas/:id', TaskController.deleteTask);

module.exports = router;