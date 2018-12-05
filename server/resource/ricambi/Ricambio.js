var mongoose = require("mongoose");
var ricambioSchema = new mongoose.Schema({



    prezzo: {
        type: Number,
        index: true,
        lowercase: true
    },
    
     tipo_ricambio: {//richiamato dal populate 
         type: mongoose.Schema.Types.ObjectId,
         ref: "tipo_ricambi",//nome con cui ho esprotato il modello
         lowercase: true
     },
    cod_ricambio: {

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