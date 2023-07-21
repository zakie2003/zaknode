const express=require("express");

const path = require("path");

const app=express();

const serverless=require("serverless-http");

const router=express.Router();

app.set("view engine","ejs");

const port=process.env.PORT ||3000;

const pubDirectory = path.join(__dirname,"./public");

app.use(express.static(pubDirectory));

app.get("/",(req,res,next)=>{
    res.render("index.ejs");
})

app.post("/proj",(req,res,next)=>{
    res.render("project.ejs");
})


module.exports.handler=serverless(app)


app.listen(port,()=>{
    console.log("Server started");
})