const express=require("express");
var app=express();

app.get("/",(req,res)=>{
    res.sendFile("index.html");
});

app.listen(8000);
console.log("server started at 8000");