var express = require('express')

var router = express.Router()

var controller = require('./controller')

// creazione autodemolitore
router.post('/', controller.creaDemolitore);

// rimuovi autodemolitore
router.delete('/:id([a-z0-9]{24})', controller.eliminaDemolitore);

//modifica autodemolitore
router.put('/:id([a-z0-9]{24})', controller.modificaDemolitore);

// lista autodemolitore
router.get('/', controller.listaDemolitori);

// cerca autodemolitore
router.get('/:id([a-z0-9]{24})', controller.cercaDemolitore);

module.exports = router;