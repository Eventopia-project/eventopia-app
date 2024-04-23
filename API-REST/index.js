// Iniciamos nuestro servidor instanciando express, cors y morgan
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// Importamos las funciones de la conexión base de datos
const { checkdb ,syncModels } = require('./database/index.js');
const { initializeRelations } = require('./database/relations.js');

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
        await syncModels();
        await initializeRelations();
    } catch (error) {
        console.error('We have a problem with sync database', error);
    }
}

const startApi = async () => {
    try {
        await checkAndSyncMySQL();
        initilalizeAnListenExpress();
    } catch (error) {
        console.error('We have a problem with api', error)
    }
}


startApi();