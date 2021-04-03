var express = require('express');
var router = express.Router();

const routesApi = require('./api/index.js');
const routesAuth = require('./auth.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth', routesAuth);
/* api */
router.use('/api', routesApi);

module.exports = router;
