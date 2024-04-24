// Recordar que creamos un enrutador
const router = require('express').Router();
// Nos importamos las funciones de los archivos correspondientes para User -carpeta controllers-
const { getAllUsers, 
        getOneUser, 
        createUser, 
        updateUser, 
        deleteUser 
    } = require('../controllers/user.controller.js');

const { checkAuth, checkAdmin } = require('../middlewares/auth.js');

// Asignamos las rutas con sus correspondientes métodos
router.get('/users', checkAuth, checkAdmin, getAllUsers);
router.get('/:id', checkAuth, getOneUser);
router.post('/newUser', checkAuth, createUser);
router.put('/:id', checkAuth, updateUser);
router.delete('/:id', checkAuth, deleteUser);

// Exportamos el enrutamiento -de este archivo-
module.exports = router;