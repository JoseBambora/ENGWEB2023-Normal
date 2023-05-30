var mongoose = require('mongoose')

var plantaSchema  = new mongoose.Schema({
    _id : Number,
    num_registo : Number,
    cod_rua : Number,
    Rua : String,
    Local : String,
    Freguesia : String,
    Espécie : String,
    nom_cie : String,
    Origem : String,
    data_plant : String,
    Estado : String,
    Caldeira : String,
    Tutor : String,
    Implantação : String,
    Gestor : String,
    data_atua : String,
    num_int : Number
})

module.exports = mongoose.model('planta',plantaSchema)