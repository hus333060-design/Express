// const express=require("express")
// const app = express();


// app.post("/upload",(req,res)=>{
//   req.on("data",(chunk)=>{
//     console.log(chunk.toString());
//   })

//   req.on("end",()=>{
//     res.json({message:"Data Sent!"});
//   })
// })

// app.listen(4000,()=>{
//     console.log("Port is running on porst 4000");
// })

// Multer is a libaray , it is mainly used to file upload in express. it parse multipart-data.

const express=require("express");
const multer = require("multer");
const crypto=require("node:crypto");
const path = require("node:path");
const app = express();


// to create own files id and save with extensiion

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//      const id = crypto.randomUUID();
//      const extension = path.extname(file.originalname);
// cb(null, id + extension);
//   }
// })

// const upload = multer({ storage })

// app.post("/upload", upload.single('profilePic'),(req,res)=>{
//     // req.body :- It is used to see form data in text Eg:-{ username: "Anshu" }
//     // console.log(req.body);
//     // // req.file :- It contains metadata like  originalname, filename,size,path adm more.
//     // console.log(req.file);
// res.json({message:"Data Sent!"});
// })

// app.listen(4000,()=>{
//     console.log("Port is running on porst 4000");
// })


// when Uplaod multiple files

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
     const id = crypto.randomUUID();
     const extension = path.extname(file.originalname);
cb(null, id + extension);
  }
})

const upload = multer({ storage })

app.post("/upload", upload.fields([{name:'profilePic', maxCount:1}, {name:'bg', maxCount:8}]),(req,res)=>{
res.json({message:"Data Sent!"});
})

app.listen(4000,()=>{
    console.log("Port is running on porst 4000");
})