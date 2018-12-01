var express = require('express')

var router = express.Router()

var controller = require('./controller')

// creazione utente
router.post('/', controller.creaUtente);

// rimuovi utente
router.delete('/:id([a-z0-9]{24})', controller.eliminaUtente);

//modifica utente
router.put('/:id([a-z0-9]{24})', controller.modificaUtente);

// lista utente
router.get('/', controller.listaUtenti);

    // router.
router.get('/:id([a-z0-9]{24})', controller.cercaUtente);

    module.exports = router;