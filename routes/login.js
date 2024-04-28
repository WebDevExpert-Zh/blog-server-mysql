const express = require('express');
const router = express.Router();
const db=require('../db/db')

/* GET users listing. */
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
