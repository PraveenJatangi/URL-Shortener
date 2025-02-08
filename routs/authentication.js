const express= require('express');
const router=express.Router();

const {handlePostAuth,handleUserLogin}=require('../controllers/auth')


router.post('/signup',handlePostAuth);
router.post('/login',handleUserLogin)


module.exports=router;