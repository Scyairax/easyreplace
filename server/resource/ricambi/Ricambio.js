var mongoose = require("mongoose");
var ricambioSchema = new mongoose.Schema({



    prezzo: {
        type: Number,
        index: true,
        lowercase: true
    },
    
     tipo_ricambio: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "TipoRicambi",
         lowercase: true
     },
    cod_pezzo: {

        type: String,
        index: true,
        validate: function () {
            if (!this.cod_pezzo) return true
            return this.cod_pezzo.length === 10;
        },
        lowercase: true
    },
    scorte: {
        type: Number,
        index: true,
        lowercase: true
    },
    descrizione: {
        type: String,
        index: true,
        lowercase: true
    },
    colore: {
        type: String,
        index: true,
        lowercase: true
    }
    
})


module.exports = mongoose.model("Ricambio", ricambioSchema, "Ricambio");//il primo ricambio è il ricambio dichiaratpo nel controller