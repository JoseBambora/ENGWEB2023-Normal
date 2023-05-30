var express = require('express');
var router = express.Router();
var Plantas = require('../controllers/plantas')

router.get('/plantas', function(req, res, next) {
  if(req.query.especie)
  {
    Plantas.getEspecie(req.query.especie)
    .then(data => res.jsonp(data))
    .catch(error => res.jsonp({message: 'error'}))
  }
  else if(req.query.implant)
  {
    Plantas.getImplant(req.query.implant)
    .then(data => res.jsonp(data))
    .catch(error => res.jsonp({message: 'error'}))
  }
  else
  {

    Plantas.list()
    .then(data => res.jsonp(data))
    .catch(error => res.jsonp({message: 'error'}))
  }
  
});

router.get('/plantas/especies/', function(req, res, next) {
  Plantas.getEspecies()
  .then(data => res.jsonp(data))
  .catch(error => res.jsonp({message: 'error'}))
});


router.get('/plantas/freguesias/', function(req, res, next) {
  Plantas.getFreguesias()
  .then(data => res.jsonp(data))
  .catch(error => res.jsonp({message: 'error'}))
});

router.get('/plantas/:id', function(req, res, next) {
  Plantas.get(req.params.id)
  .then(data => res.jsonp(data))
  .catch(error => res.jsonp({message: 'error'}))
});


router.post('/plantas/', function(req, res, next) {
  Plantas.addPlanta(req.body)
  .then(data => res.jsonp(data))
  .catch(error => res.jsonp({error:error}))
});

router.delete('/plantas/:id', function(req, res, next) {
  Plantas.delete(req.params.id)
  .then(data => res.jsonp(data))
  .catch(error => res.jsonp({error:error}))
})

module.exports = router;
