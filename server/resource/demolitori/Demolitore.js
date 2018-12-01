var mongoose = require("mongoose");
var demolitoreSchema = new mongoose.Schema(
{
    denominazione: {
        type: String,
        index: true,
        lowercase: true
    },
    p_iva: {
        type: String,
        index: true,
        validate: function () {
            if (!this.p_iva) return true
            return this.p_iva.length === 11
        },
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
    foto: {
        type: String,
        index: true,
        default: "./images/utente.jpg"
    },
    officina: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Utenti',                           // solo per utenti di tipo officina
    }],
})

module.exports = mongoose.model("demolitore", demolitoreSchema, "demolitore")