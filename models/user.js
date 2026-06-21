const mongoes=require('mongoose')

mongoes.connect("mongodb://localhost/hackthon");

const userSchema=mongoes.Schema({
    name: String ,
    email: String,
    image: String
})
module.exports=mongoes.model("user",userSchema)