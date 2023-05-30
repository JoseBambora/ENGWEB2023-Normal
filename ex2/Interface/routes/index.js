var express = require('express');
var Plantas = require('../controllers/plantas')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Plantas.list()
  .then(data => res.render('plantas',{plantas:data}))
  .catch(error => res.render('error',{error: error}))
});

router.get('/:id', function(req, res, next) {
  Plantas.get(req.params.id)
  .then(data => res.render('planta',{planta:data}))
  .catch(error => res.render('error',{error: error}))
});

router.get('/especies/:id', function(req, res, next) {
  Plantas.getEspecie(req.params.id)
  .then(data => res.render('especie',{nome:req.params.id,desg_cientif:data[0].nom_cie,plantas:data}))
  .catch(error => res.render('error',{error: error}))
});

module.exports = router;
