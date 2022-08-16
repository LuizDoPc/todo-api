const { Sequelize } = require("sequelize");
require("dotenv/config.js");

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

let sequelize;
try {
    sequelize = new Sequelize(dbName, dbUser, dbPassword, {
        dialect: "mysql",
        host: dbHost,
    });
} catch (e) {
    console.log('Error connecting to database: ', e);
    process.exit(1);
}

module.exports = sequelize; 