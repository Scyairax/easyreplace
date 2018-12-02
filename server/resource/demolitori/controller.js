module.exports = (function () {
    var Demolitore = require('./Demolitore')

    var creaDemolitore = (req, res) => {
        var creademolitore = new Demolitore(req.body);
        console.log(req.body);
        creademolitore.save().then(data => res.json(data))
            .catch(err => res.json(err))
    }

    var eliminaDemolitore = (req, res) => {
        var id = req.params.id;
        Demolitore.findByIdAndDelete(id)
            .then(data => res.json(data)
            ).catch(err => res.json(err))
    }

    var modificaDemolitore = async (req, res) => {
        try {
            var id = req.params.id;
            var body = req.body;
            var demolitoreModificato = await Demolitore.findByIdAndUpdate(id, body)
            res.json(demolitoreModificato)
        }
        catch (err) {
            console.log(err)
        }
    }

    var listaDemolitori = async (req, res) => {
        try {
            var demolitori = await Demolitore.find()
            res.json(demolitori)
        }
        catch (err) {
            res.json(err)
        }

    }

    var cercaDemolitore = async (req, res) => {
        try {
            var id = req.params.id;
            var cercademolitore = await Demolitore.findById(id)
            res.json(cercademolitore)
        }
        catch (err) {
            console.log(err)
        }
    }

    return {
        creaDemolitore: creaDemolitore,
        eliminaDemolitore: eliminaDemolitore,
        modificaDemolitore: modificaDemolitore,
        listaDemolitori: listaDemolitori,
        cercaDemolitore: cercaDemolitore
    }

})()