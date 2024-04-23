// Iniciamos nuestro servidor instanciando express, cors y morgan
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// Importamos las funciones de la conexión base de datos
const { connection, checkdb } = require('./database/index.js');

const initilalizeAnListenExpress = () => {
    try {
        app.use(express.json())
            .use(cors())
            .use(morgan('dev'))
            .listen(3000, () => {
                console.info('Server started')
            })
    } catch (error) {
        console.error('We have a problem', error);
    }
}


async function checkAndSyncMySQL() {
    try {
        await checkdb();
    } catch (error) {
        console.error('We have a problem with sync database', error);
    }
}

const startApi = async () => {
    try {
        await checkAndSyncMySQL();
        initilalizeAnListenExpress();
    } catch (error) {
        console.error('e have a problem with api', error)
    }
}


startApi();