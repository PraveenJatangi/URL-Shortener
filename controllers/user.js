
const shortid=require('shortid');
const URl = require('../model/urlScehma');

async function handlePostUrl(req,res){

    const body=req.body;
    if(!body.url){
        return res.status(404).json({message:"url is required"})
    }
    const shortId=shortid();

     await URl.create({
        shortid:shortId,
        originaUrl:body.url,
        visitHistory:[]
    });

    return res.render('home',{
        id:shortId
    })
    // return res.json({id:shortId})

}

async function handleGetUrl(req,res){
    const shortid=req.params.Id;
    if (!shortid) {
        return res.status(400).json({ message: "Invalid URL Id" });
    }
    const entry= await URl.findOneAndUpdate({
        shortid
    },{
        $push:{ visitHistory:{  timestamp:Date.now() }  }
    });
    if (!entry) {
        return res.status(404).json({ message: "URL not found" });
    }
    if (!entry.originaUrl) {
        return res.status(500).json({ message: "Redirect URL is missing" });
    }
    res.redirect(entry.originaUrl);

}

async function handleGetAnalytics(req,res){
    const shortid=req.params.shortid;
    if (!shortid) {
        return res.status(400).json({ message: "Invalid URL Id" });
    }
    const result= await URl.findOne({shortid});

     if (!result) {
            return res.status(404).json({ message: "URL not found" });
        }
    return res.json({
        totalclicks:result.visitHistory.length,
        analytics:result.visitHistory
    })

}
module.exports={handlePostUrl,handleGetUrl,handleGetAnalytics}