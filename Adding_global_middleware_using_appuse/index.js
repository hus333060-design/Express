import express from "express";

const app=express();
const Port=4000;

// to made global middlwware :- app.use()  :- It will ran betwwn every res and req
// app.use((req,res,next)=>{
//   console.log(req.headers);
//   console.log(req.url);
//   next();
// })

// to parsing the data
// app.use((req,res,next)=>{
//     req.on("data",(chunk)=>{
//         const data=JSON.parse(chunk.toString());
//         req.body=data;
//         next();
//     })
// })

// Note :- We don't need to do parsing data individually we have predefined configured function exist:- Express.json()
app.use(express.json());


app.get("/",(req,res)=>{
  res.send("Hello Brother ")  
})


app.get("/login",(req,res)=>{
  res.send("Login page")  
})

app.post("/user",(req,res)=>{
     console.log(req.body);
    res.send("This is a your profile")
})

app.put("/",(req,res)=>{
 res.send("This is a Put req")
})
app.delete("/",(rq,res)=>{
    res.send("This is a delete req")
})
app.listen(Port,()=>{
    console.log(`Port is running on ${Port}`);
    
})

