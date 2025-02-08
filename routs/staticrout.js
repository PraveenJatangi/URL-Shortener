const express =require('express')
const router= express.Router();
const {handlePostFromUi,handleGetAuthPage,handleGetLoginPage}=require('../controllers/static');

router.get('/',handlePostFromUi);
router.get('/signup',handleGetAuthPage);
router.get('/login',handleGetLoginPage);
module.exports=router;