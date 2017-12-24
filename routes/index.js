var express = require('express');
var router = express.Router();

var enConfig = require('./../public/lang/enConfig.json');
var zhConfig = require('./../public/lang/zhConfig.json');

router.get('/',function(req, res, next){
  config = zhConfig;
  res.render('index',config);
})


//多语言测试
router.get('/:lang', function(req, res, next){
  var lang = req.params.lang;
  var config;

  if(lang == 'en'){
    config = enConfig
  }
  else if(lang == 'zh'){
    config = zhConfig
  }
  else{
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
  res.render('index',config)
})



module.exports = router;
