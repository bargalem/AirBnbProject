const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/LoginDatabase")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("Failed connected")
})

const LoginSchema= new mongoose.Schema({
name:{
type:String,
require:true
},
Email:{
    type:String,
    require:true
    },
password:{
    type:String,
    require:true
    },
    hotelnm:{
        type:String,
        require:true
        }


})
const collection=new mongoose.model("logontabl",LoginSchema)

module.exports=collection;

