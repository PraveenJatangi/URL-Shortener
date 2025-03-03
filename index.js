const express = require('express');
const mongoose = require('mongoose');

const ejs = require ('ejs');
const path = require ('path');
const URL = require('./model/urlScehma')

const cookieParser = require('cookie-parser')

const {restricToLoggedInUserOnly,checkAuth}=require('./middleware/auth')

const {mongoDbConnect}=require('./config/mongo');

const urlRouter=require('./routs/user');
const staticRoute=require('./routs/staticrout');
const authRoute=require ('./routs/authentication')

const app= express();
const PORT= 8001;

mongoDbConnect("mongodb://127.0.0.1:27017/url-shortner");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.set('view engine','ejs');
app.set('views', path.resolve('./view'));
 
//route to get the home page to send link


app.use("/url",restricToLoggedInUserOnly,urlRouter);
app.use('/',checkAuth,staticRoute);
app.use('/user',authRoute);

app.listen(PORT,()=>{console.log("Port is listening at 8001")});