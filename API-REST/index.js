// Iniciamos nuestro servidor instanciando express, cors y morgan
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// Importamos las funciones de la conexión base de datos
const { checkdb ,syncModels } = require('./database/index.js');
const initializeRelations = require('./database/relations.js');

const initilalizeAnListenExpress = () => {
    try {
        app.use(express.json())
            .use(cors())
            .use('/api', require('./api/routes/index.js'))
            .use(morgan('dev'))
            .use(express.static(path.join(__dirname, '../frontend/dist')))
            .get('*', (req, res) => {
                res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
            })
            .listen(3000, '0.0.0.0', () => {
                console.info('Server started')
            })
    } catch (error) {
        console.error('We have a problem', error);
    }
}


async function checkAndSyncMySQL() {
    try {
        await checkdb();
        initializeRelations();
        await syncModels();
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