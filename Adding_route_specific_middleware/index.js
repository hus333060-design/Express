// Route specific middleware :- it will work of the specified route.
import express from "express";

const app=express();
const Port=4000;



app.use("/",(req,res,next)=>{
console.log(req.headers);
console.log("hii");
next();
})

// It will run before every url request does not we have given "/" this route, how?
// understand it first when you send reqest url .
// if we did not use app.use('/') how  app.get("/login") will be excute?
// there express will be check :- req.url=== route , it will be see so it will run this callback function. here both are "/login"

// Note :-  in the app.use ("Route") there is not comparsion like tha req.url=== route
// Example:- when we are going to req.utl /users/1 why app.use(/users) middlweare is running?
// It comparsion like that :- when req url comes it breaks into parts like if users/1 it will break like thta "users", "1" and start maching with middleware one by one 
// it see "users" middleware is defined first to it will ran this middlware if there would be /user/1 it will not ran it.
// if you want to use "users/1" first take it upper to "users" then it will ran first .
app.use("/users",(req,res)=>{
     res.send("First Middleware");
})
app.use("/users/1",(req,res)=>{
     res.send("Second Middleware");
})

app.get("/",(req,res)=>{
  res.send("Hello Brother ")  
})


app.get("/login",(req,res)=>{
  res.send("Login page")  
})

// app.post("/user",(req,res)=>{
//      console.log(req.body);
//     res.send("This is a your profile")
// })

app.put("/",(req,res)=>{
 res.send("This is a Put req")
})
app.delete("/",(rq,res)=>{
    res.send("This is a delete req")
})
app.listen(Port,()=>{
    console.log(`Port is running on ${Port}`);
    
})

