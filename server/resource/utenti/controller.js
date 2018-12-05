module.exports = (function() {
    var Utente = require('./Utente')

    var creaUtente = (req, res) => {
        var creautente = new Utente(req.body);
        console.log(req.body);
        creautente.save().then(data => res.json(data))
        .catch(err => res.json(err))
    }

    var eliminaUtente = (req, res) => {
        var id = req.params.id;
        Utente.findByIdAndDelete(id)
        .then(data => res.json(data)
    ).catch(err => res.json(err)) 
    }
    
    var modificaUtente = async (req, res) => {
      try {
          var id = req.params.id;
          var body = req.body;
          var modificaUtente = await Utente.findByIdAndUpdate(id,body)
            res.json(modificaUtente)
      }
      catch (err) {
          console.log(err)
        }
    }

    var listaUtenti = async (req, res) => { 

        var tipo = req.query.tipo;

        try {
            if (!tipo) { 
                var utenti = await Utente.find()

                res.json(utenti)
            }
                
            var utenti = await Utente.find({tipo:tipo})
            res.json(utenti)
        }
        catch (err) {
            res.json(err)
            //console.log(err)
          }
        
    }

    var cercaUtente = async (req, res) => {
        try {
            var id = req.params.id;
            var cercautente = await Utente.findById(id)
            res.json(cercautente)
        }
        catch(err) {
            console.log(err)
          }
    }





    return {
        creaUtente: creaUtente,
        eliminaUtente: eliminaUtente,
        modificaUtente: modificaUtente,
        listaUtenti: listaUtenti,
        cercaUtente: cercaUtente
    }

})()