const Plantas = require('../models/plantas')

module.exports.list = () => {
    return Plantas.find()
    .then(data => {return data})
    .catch(error => {return error})
}

module.exports.get = (id) => {
    return Plantas.findOne({_id:id})
    .then(data => {return data})
    .catch(error => {return error})
}

module.exports.getEspecie = (especie) => {
    return Plantas.find({Espécie:especie})
    .then(data => {return data})
    .catch(error => {return error})
}

module.exports.getFreguesias = () => {
    return Plantas.distinct('Freguesia').sort()
    .then(data => {return data.filter(str => str.length > 0)})
    .catch(error => {return error})
}

module.exports.getImplant = (implant) => {
    return Plantas.find({Implantação:implant})
    .then(data => {return data})
    .catch(error => {return error})
}

module.exports.getEspecies = () => {
    return Plantas.distinct('Espécie')
    .sort()
    .then(data => {return data})
    .catch(error => {return error})
}


module.exports.addPlanta = (planta) => {
    return Plantas.create(planta)
    .then(data => {return data})
    .catch(error => {return error})
}

module.exports.delete = (id) => {
    return Plantas.deleteOne({_id:id})
    .then(data => {return data})
    .catch(error => {return error})
}

