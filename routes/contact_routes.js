var miRouter = require('express').Router()
var contact_service = require('../services/contact_service');

miRouter.get('/', (req, res) => {
    res.send('Lista de contactos')
});

miRouter.get('/:id', async (req, res) => {
    var id = req.param('id')
    resultado = await contact_service.obtenerContactoPorId(id);
    res.send(resultado);
});

module.exports = miRouter
