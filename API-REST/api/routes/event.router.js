const router = require('express').Router()

const {
    getAllEvents,
    getOneEvent,
    createEvent,
    updateEvent,
    deleteEvent,

} = require('../controllers/event.controller.js')

// Asignamos las rutas con sus correspondientes métodos
router.get('/events', getAllEvents);
router.get('/:id', getOneEvent);
router.post('/newEvent', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

// Exportamos el enrutamiento -de este archivo-
module.exports = router