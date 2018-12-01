module.exports = (function () {
    var Auto = require('./Auto')

    var creaAuto = (req, res) => {
        var creaAuto = new Auto(req.body);
        console.log(req.body);
        creaAuto.save().then(data => res.json(data))
            .catch(err => res.json(err))
    }

    var eliminaAuto = (req, res) => {
        var id = req.params.id;
        Auto.findByIdAndDelete(id)
            .then(data => res.json(data)
            ).catch(err => res.json(err))
    }

    var modificaAuto = async (req, res) => {
        try {
            var id = req.params.id;
            var body = req.body;
            var modificaAuto = await Auto.findByIdAndUpdate(id, body)
            res.json(modificaAuto)
        }
        catch (err) {
            console.log(err)
        }
    }

    var listaAuto = async (req, res) => {
        try {
            var auto = await Auto.find()
            res.json(auto)
        }
        catch (err) {
            res.json(err)
            //console.log(err)
        }

    }

    var cercaAuto = async (req, res) => {
        try {
            var id = req.params.id;
            var cercaAuto = await Auto.findById(id)
            res.json(cercaAuto)
        }
        catch (err) {
            console.log(err)
        }
    }





    return {
        creaAuto: creaAuto,
        eliminaAuto: eliminaAuto,
        modificaAuto: modificaAuto,
        listaAuto: listaAuto,
        cercaAuto: cercaAuto
    }

})()