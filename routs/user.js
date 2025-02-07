const express = require("express");
const router= express.Router();
const {handlePostUrl,handleGetUrl,handleGetAnalytics}=require('../controllers/user')

router.post('/',handlePostUrl);
router.get('/:Id',handleGetUrl);
router.get('/analytics/:shortid',handleGetAnalytics);
module.exports=router;