var mongoose = require("mongoose");
var tipo_ricambiSchema = new mongoose.Schema({

    nome: {
        type: String,
        index: true,
        lowercase: true
    }
    
})
module.exports = mongoose.model("tipo_ricambi", tipo_ricambiSchema, "tipo_ricambi")