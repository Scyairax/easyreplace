var express = require('express')

var router = express.Router()

var controller = require('./controller')

// creazione utente
router.post('/', controller.creaRicambi);

router.get('/:id([a-z0-9]{24})', controller.cercaRicambio);

router.get('/', controller.listaRicambi);

router.delete('/:id([a-z0-9]{24})', controller.eliminaRicambio);



    module.exports = router;