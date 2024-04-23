const { Sequelize } = require('sequelize');
require('dotenv').config();

// Creando una instancia de sequelize
const connection = new Sequelize(process.env.DB_NAME, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
    logging: false
});

// comprobar la conexión a dicha base de datos
const checkdb = async () => {
    try {
        await connection.authenticate()
        console.log('Connection to db successful!');
    } catch (error) {
        console.error('We have a problem with connection to db', error);
    }
}

module.exports = {
    connection,
    checkdb
}