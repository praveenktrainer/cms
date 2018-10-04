var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
const storyModel = mongoose.model("Story")

/* GET home page. */
router.get('/add', function(req, res, next) {
  console.log(req.session.email, "req.session.name");
  if(!req.session.email)
    {
      res.redirect("/login");
    }
  res.render('add-story', { title: 'Express' });
});

router.get("/", function(req, res, next){
  storyModel.find(function(error, docs){
      if(error)
        {

        }
      res.render("stories", { stories : docs })
  })
})

// /story/:slug
router.get("/:slug", function(req, res, next){

  storyModel.findOne({ slug : req.params.slug }, function(error, doc){
    console.log(error, doc)
    res.render('story', { title: doc.name, content : doc.content });
  })

})


router.post('/add', function(req, res, next) {

  if(!req.session.email)
    {
      res.redirect("/signup");
      return
    }

  var slugurl = req.body.storyname.toLowerCase();
  slugurl = slugurl.replace(/ /g, "-");

  storyModel.create({
    name : req.body.storyname,
    content : req.body.editordata,
    slug : slugurl,
    author : req.session.email,
    summary : req.body.summary,
    createdOn : new Date()
  })
  res.redirect("story/" + slugurl);
});

module.exports = router;
