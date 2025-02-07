const mongoose=require('mongoose');

async function mongoDbConnect(url){
    await mongoose.connect(url)
    .then(()=>console.log('DB cnnected'))
    .catch(err=>console.log("error",err))
}

module.exports= {mongoDbConnect};