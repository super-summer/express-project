var express = require('express');
var router = express.Router();

/*redbag page */
router.get('/', function(req, res, next) {
  res.render('redbag', { title: '积木盒子 jimubox.com - 真诚透明的互联网金融' });
  //res.send('respond with a resource');
});

module.exports = router;
