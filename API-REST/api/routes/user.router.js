// Recordar que creamos un enrutador
const router = require('express').Router();
// Nos importamos las funciones de los archivos correspondientes para User -carpeta controllers-
const { getAllUsers, 
        getOneUser, 
        createUser, 
        updateUser, 
        deleteUser 
    } = require('../controllers/user.controller.js');

// Asignamos las rutas con sus correspondientes métodos
router.get('/users', getAllUsers);
router.get('/user:id', getOneUser);
router.post('/newUser', createUser);
router.put('/user:id', updateUser);
router.delete('/user:id', deleteUser);

// Exportamos el enrutamiento -de este archivo-
module.exports = router;