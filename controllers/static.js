const URl = require('../model/urlScehma');

async function handlePostFromUi(req,res){
    if(!req.user) return res.render('/login');
    const allUrls = await URl.find({createdby:req.user._id});
 return res.render('home',{url: allUrls

 })

}

async function handleGetAuthPage(req,res){
    return res.render('auth')
}

async function handleGetLoginPage(req,res){
    return res.render('login')
}

module.exports={handlePostFromUi,handleGetAuthPage,handleGetLoginPage}