var express = require('express');
var router = express.Router();
const mongoose = require("mongoose")
const UserModel = mongoose.model("User");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  UserModel.findOne({ 
    email : req.body.email,
    password : req.body.password
  }, function(error, doc){
    if(error)
      {
        res.render('login', { title: 'Express' });
      }
    
    if(doc)
      {
        req.session.email = req.body.email;
        res.redirect("/stories");
      }
  })
});

module.exports = router;
