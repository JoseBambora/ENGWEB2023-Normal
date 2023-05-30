const axios = require('axios')
const API = require('../api/dados')

module.exports.list = () => {
    return axios.get(API.plantas)
    .then(data => {return data.data})
    .catch(err => {return err})
}

module.exports.get = (id) => {
    return axios.get(API.planta(id))
    .then(data => {return data.data})
    .catch(err => {return err})
}

module.exports.getEspecie = (id) => {
    return axios.get(API.especie(id))
    .then(data => {return data.data})
    .catch(err => {return err})
}