module.exports = (function () {
    var tipo_ricambi = require('./TipoRicambi')

    var creatipo_ricambi = (req, res) => {
        var creatipo_ricambi = new tipo_ricambi(req.body);
        console.log(req.body);
        creatipo_ricambi.save().then(data => res.json(data))
            .catch(err => res.json(err))
    }

    var eliminatipo_ricambi = (req, res) => {
        var id = req.params.id;
        tipo_ricambi.findByIdAndDelete(id)
            .then(data => res.json(data)
            ).catch(err => res.json(err))
    }

    var modificatipo_ricambi = async (req, res) => {
        try {
            var id = req.params.id;
            var body = req.body;
            var modificatipo_ricambi = await tipo_ricambi.findByIdAndUpdate(id, body)
            res.json(modificatipo_ricambi)
        }
        catch (err) {
            console.log(err)
        }
    }

    var listatipo_ricambi = async (req, res) => {
        try {
            var tipo_ricambio = await tipo_ricambi.find()
            res.json(tipo_ricambio)
        }
        catch (err) {
            res.json(err)
            console.log(err)
        }

    }

    var cercatipo_ricambi = async (req, res) => {
        try {
            var id = req.params.id;
            var cercatipo_ricambi = await tipo_ricambi.findById(id)
            res.json(cercatipo_ricambi)
        }
        catch (err) {
            console.log(err)
        }
    }





    return {
        creatipo_ricambi: creatipo_ricambi,
        eliminatipo_ricambi: eliminatipo_ricambi,
        modificatipo_ricambi: modificatipo_ricambi,
        listatipo_ricambi: listatipo_ricambi,
        cercatipo_ricambi: cercatipo_ricambi
    }

})()