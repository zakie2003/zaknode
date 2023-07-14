const express=require("express");

const path = require("path");

const app=express();

app.set("view engine","ejs");

const pubDirectory = path.join(__dirname,"./public");

app.use(express.static(pubDirectory));

app.get("/",(req,res,next)=>{
    res.render("index.ejs");
})

app.post("/proj",(req,res,next)=>{
    res.render("project.ejs");
})

app.listen(3000,()=>{
    console.log("Server started");
})