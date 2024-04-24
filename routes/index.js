var express = require('express');
var router = express.Router();
const db=require('../db/db')
/* GET home page. */
router.get('/', function(req, res, next) {
  let query='SELECT * FROM `user`'
  db.querySql(query).then(data=>{
    res.json({
      msg:'查询成功',
      data:data
    })
  })
});

module.exports = router;
