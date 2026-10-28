import express from "express";
import {open,stat} from "node:fs/promises"
import { createReadStream } from "node:fs";

const app=express();

// to read static files :- it use this express.static("") function in the app.use() it is predefined middleware , We can pass arguemnt in this function folder there files and folder are kept. It is a convention if we are going to use express.static() use "Public" folder to keep all files inside it. 
app.use(express.static("public"));
// If you want to server any file 
app.get("/download",async (req,res)=>{
//    const filehandler= await open("snow.mp4");
//    const readStream=filehandler.createReadStream();
//    const stats=await filehandler.stat();
//    res.setHeader("Content-Length", stats.size);
//    res.setHeader("Content-Type", "video/mp4");
//    readStream.pipe(res);

// for do these work express a pre defined function
res.sendFile(`${import.meta.dirname}/snow.mp4`);
})
app.get("/",(req,res)=>{
    res.send("Hello Brother")
})
app.listen(4000,()=>{
    console.log("Server is running on 4000 Port");
})