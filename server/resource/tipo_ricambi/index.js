var express = require('express')

var router = express.Router()

var controller = require('./controller')

// creazione tipo_ricambi
router.post('/', controller.creatipo_ricambi);

// rimuovi tipo_ricambi
router.delete('/:id([a-z0-9]{24})', controller.eliminatipo_ricambi);

//modifica tipo_ricambi
router.put('/:id([a-z0-9]{24})', controller.modificatipo_ricambi);

// lista tipo_ricambi
router.get('/', controller.listatipo_ricambi);

// router.
router.get('/:id([a-z0-9]{24})', controller.cercatipo_ricambi);

module.exports = router;