var express = require('express')

var router = express.Router()

var controller = require('./controller')

// creazione utente
router.post('/', controller.creaAuto);

// rimuovi utente
router.delete('/:id([a-z0-9]{24})', controller.eliminaAuto);

//modifica utente
router.put('/:id([a-z0-9]{24})', controller.modificaAuto);

// lista utente
router.get('/', controller.listaAuto);

// router.
router.get('/:id([a-z0-9]{24})', controller.cercaAuto);

module.exports = router;