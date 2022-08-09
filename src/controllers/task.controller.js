const Task = require('../models/task.model');

class TaskController {
    async getAllTasks(req, res) {
        const tasks = await Task.findAll();

        res.json(tasks);
    }

    async getTaskById(req, res) {
        const task = await Task.findByPk(req.params.id);

        if (!task)
            return res.status(404).json({ message: 'Tarefa não encontrada!' });

        res.json(task);
    }

    async createTask(req, res) {
        const { descricao, prazo, completa } = req.body;

        if (!descricao || !prazo || completa === undefined)
            return res.status(400).json({ message: 'Dados inválidos!' });

        const task = await Task.create({
            descricao,
            prazo,
            completa
        });

        res.json(task);
    }

    async updateTask(req, res) {
        const { descricao, prazo, completa } = req.body;

        const task = await Task.update({
            descricao,
            prazo,
            completa
        }, {
            where: {
                id: req.params.id
            }
        });

        if (!task)
            return res.status(400).json({ message: 'Tarefa não encontrada!' });

        res.json(task);
    }

    async deleteTask(req, res) {
        const task = await Task.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!task)
            return res.status(400).json({ message: 'Tarefa não encontrada!' });

        res.json(task);
    }
}

module.exports = new TaskController();