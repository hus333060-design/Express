import express from "express";
import multer from "multer";
import crypto from "node:crypto"
import path from "node:path";
import cors from "cors";
const app = express();

app.use(cors());


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

const upload = multer({ storage, limits:{ fileSize: 1000 * 1024 * 1024 }})


app.post(
    "/upload",
    upload.fields([{ name: "profilePic", maxCount: 1 },{name:"bg", maxCount:5}]),
    (req, res) => {
        console.log("Multer finished");
        return res.status(200).json({files: req.files , body: req.body});
    }
);

app.listen(4000,()=>{
    console.log("Port is running on porst 4000");
})