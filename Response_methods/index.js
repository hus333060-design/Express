// Sending JSON using Express
// 1.JSON 
import express from "express";

const app=express();

app.get("/",(req,res)=>{
    // res.send("hee")
    // res.setHeader('Content-Type','application/json')
    // res.send(JSON.stringify({message:"Hello"}));
    // but if you won't set header it is automatically configured to handle this.
    // res.send(JSON.stringify({message:"Hello"}));
    // more small res.json()
    res.json({message:"Hii,there"})
})

app.listen(4000,()=>{
    console.log("Server is running on 4000 Port");
})