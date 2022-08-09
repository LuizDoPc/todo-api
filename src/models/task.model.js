const { DataTypes } = require("sequelize");
const db = require('../config/db');

const Task = db.define("tasks", {
   id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
   },
   descricao: {
      type: DataTypes.STRING,
      allowNull: false
   },
   prazo: {
      type: DataTypes.DATE,
      allowNull: false
   },
   completa: {
      type: DataTypes.BOOLEAN,
      allowNull: false
   }
});

db.sync().then(() => {
   console.log('Tasks table created successfully!');
}).catch((error) => {
   console.error('Unable to create table: ', error);
});

module.exports = Task;