const mongoose= require ('mongoose');

const userScehma= new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        uniquie:true,
        required:true
    },
    password:{
        type:String,
        uniquie:true,
        required:true
    }
})

const User= mongoose.model('user',userScehma);
module.exports=User;