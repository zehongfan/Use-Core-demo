
var express = require('express');
var router = express.Router();
 

 
/* GET home page. */
router.get('/noncors', function(req, res, next) {
  res.json(200, {str: "cors跨域失败成功"});
});
 
/* GET home page. */
router.get('/getData', function(req, res, next) {
  //设置允许跨域请求
    var reqOrigin = req.header("origin");
 
  if(reqOrigin !=undefined && reqOrigin.indexOf("http://localhost:8080") > -1){
  //设置允许 http://localhost:3000 这个域响应
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  }
  res.json(200, {str: "cors跨域成功"});
 
});
 
module.exports = router;
