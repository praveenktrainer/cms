var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

const UserModel = mongoose.model("User");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.render('signup', { title: 'Express' });

  if(req.body.username !== "" && req.body.password !== "" && req.body.email !== "")
    {
      UserModel.create({
        name : req.body.username,
        email : req.body.email,
        password : req.body.password
      })
    }
});


module.exports = router;
