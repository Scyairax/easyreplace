var mongoose = require("mongoose");
var autoSchema = new mongoose.Schema({



    modello: {
        type: String,
        index: true,
        lowercase: true
    },
    marca: {
        type: String,
        index: true,
        lowercase: true
    },
    n_porte: {
        type: String,
        enum: ['3', '5', '7'],
        index: true,

    },
    colore: {
        type: String,
        index: true,
        lowercase: true
    },
    versione: {
        type: String,
        index: true,
        enum: ['multijet', 'abarth', 'ds'],
    },
    alimentazione: {
        type: String,
        index: true,
        lowercase: true
    },
    cilindrata: {
        type: String,
        index: true,
        lowercase: true
    },
    tipo_ricambio: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tipo_ricambi"

    }]
})
module.exports = mongoose.model("auto", autoSchema, "auto")