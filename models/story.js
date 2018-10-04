const mongoose = require("mongoose");

mongoose.connect("mongodb://admin:admin1234@ds121673.mlab.com:21673/cms");

const StorySchema = new mongoose.Schema({
    name : String,
    slug : String,
    content : String,
    summary : String,
    author : String,
    createdOn : String,
    comments : [{
        comment : String,
        author : String,
        createdOn : String
    }]
});

mongoose.model("Story", StorySchema, "stories");