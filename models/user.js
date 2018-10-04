const mongoose = require("mongoose");

mongoose.connect("mongodb://admin:admin1234@ds121673.mlab.com:21673/cms");

const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
});

mongoose.model("User", UserSchema, "users");