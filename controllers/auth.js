const User=require('../model/user');

async function handlePostAuth(req,res){
    const {name,email,password}=req.body;

    User.create({
        name,
        email,
        password
    })
    return res.redirect('/');
}

async function handleUserLogin(req,res){
  
    const {email,password}=req.body;
     const user= await User.findOne({email,password});
     if(!user){
        return res.render('login',{
            message:"user not found"
        })
     }
     return res.redirect('/');
}

module.exports={handlePostAuth,handleUserLogin}