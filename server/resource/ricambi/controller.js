module.exports = (function() {
    var Ricambio = require('./Ricambio')
    var tipo_rica = require('../tipo_ricambi/TipoRicambi')

    var modificaRicambio = async (req, res) => {
        try {
            var id = req.params.id;
            var body = req.body;
            var modificaricambio = await Ricambio.findByIdAndUpdate(id,body)
              res.json(modificaricambio)
        }
        catch (err) {
            console.log(err)
          }
      }

    var eliminaRicambio = (req, res) => {
        var id = req.params.id;
        Ricambio.findByIdAndDelete(id)
        .then(data => res.json(data)
    ).catch(err => res.json(err)) 
    }


    var listaRicambi = async (req, res) => {
        try {
            var listaricambi = await Ricambio.find().
            populate('tipo_ricambio')     
            res.json(listaricambi)
        }
        catch (err) {
            res.json(err)
            //console.log(err)
          }
        
    }

    var creaRicambi = (req, res) => {
        var crearicambi = new Ricambio(req.body);
        console.log(req.body);
        crearicambi.save().then(data => res.json(data))
        .catch(err => res.json(err))
    }

    var cercaRicambio = async (req, res) => {
        try {
            var id = req.params.id;
            var cercaricambio = await Ricambio.findById(id)
            res.json(cercaricambio)
        }
        catch(err) {
            console.log(err)
          }
    }

    return {
        creaRicambi: creaRicambi,
        cercaRicambio: cercaRicambio,
        listaRicambi: listaRicambi,
        eliminaRicambio: eliminaRicambio,
        modificaRicambio:modificaRicambio
    }

})()