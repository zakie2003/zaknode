const express=require("express");

const path = require("path");

const app=express();

const serverless=require("serverless-http");

const router=express.Router();

app.set("view engine","ejs");

const pubDirectory = path.join(__dirname,"./public");

app.use(express.static(pubDirectory));

router.get("/",(req,res,next)=>{
    res.render("index.ejs");
})

router.post("/proj",(req,res,next)=>{
    res.render("project.ejs");
})

app.use("/.functions/homepage",router);

module.exports.handler=serverless(app)
