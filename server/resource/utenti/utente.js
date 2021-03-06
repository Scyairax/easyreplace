var mongoose = require("mongoose");
var utenteSchema = new mongoose.Schema({



    nome: {
        type: String,
        index: true,
        lowercase: true
    },
    cognome: {
        type: String,
        index: true,
        lowercase: true
    },
    denominazione: {
        type: String,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        index: true,
        lowercase: true
    },
    username: {
        type: String,
        index: true,
        lowercase: true
    },
    password: {
        type: String,
        index: true,
        lowercase: true
    },
    telefono: {
        type: String,
        index: true,
        lowercase: true
    },
    codice_fiscale: {
        type: String,
        index: true,
        validate: function () {
            if (!this.codice_fiscale) return true
            return this.codice_fiscale.length === 16;
        },
        lowercase: true
    },
    p_iva: {
        type: String,
        index: true,
        validate: function () {
            if (!this.p_iva) return true
            return this.p_iva.length===11
        },
        lowercase: true
    },
    data_nascita: {
        type: Date,
        index: true,
        lowercase: true
    },
    comune: {
        type: String,
        index: true,
        lowercase: true
    },
    indirizzo: {
        type: String,
        index: true,
        lowercase: true
    },
    provincia: {
        type: String,
        index: true,
        lowercase: true
    },

    cap: {
        type: String,
        index: true,
        required: true,
        validate: function () {   
            return this.cap.length === 5;
        },
        lowercase: true
    },

    tipo: {
        type: String,
        enum: ["utente", "officina"],
        index: true

    },
    foto: {
        type: String,
        index: true,
        default: "./images/utente.jpg"
    }


})
module.exports = mongoose.model("utente", utenteSchema, "utente")