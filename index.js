const express = require('express');
const mongoose = require('mongoose');

const ejs = require ('ejs');
const path = require ('path');
const URL = require('./model/urlScehma')

const {mongoDbConnect}=require('./config/mongo');

const urlRouter=require('./routs/user');
const app= express();
const PORT= 8001;

mongoDbConnect("mongodb://127.0.0.1:27017/url-shortner");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs');
app.set('views', path.resolve('./view'));
 
//route to get the home page to send link
app.get('/', async (req, res) => {
    try {
        const allUrls = await URL.find({});

        return res.render('home', { url: allUrls });
    } catch (error) {
        console.error("Error fetching URLs:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.use("/url",urlRouter);

app.listen(PORT,()=>{console.log("Port is listening at 8001")});