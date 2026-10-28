// import express from "express";

// const app=express();
// const Port=4000;
// app.get("/",(req,res)=>{
//   res.send("Hello Brother ")  
// })

// app.get("/login",(req,res)=>{
//   res.send("Login page")  
// })



// app.post("/",(req,res)=>{
//     res.send("This is a Post req")
// })

// app.put("/",(req,res)=>{
//  res.send("This is a Put req")
// })
// app.delete("/",(rq,res)=>{
//     res.send("This is a delete req")
// })
// app.listen(Port,()=>{
//     console.log(`Port is running on ${Port}`);
    
// })

// // Route and Request URL
// // Simple Difference
// // Route --> What the Express application is set up to handle means it is already set up what will be happend if this req come on this path.
// // Request URL --> What the client actually requested.

// // 1.Route
// // Example:- app.get("/test", (req, res) => { res.send("Test"); });
// // /test = Route
// // Express is configured to handle a GET request coming to /test.

// // 2 Request URL
// // req.url contains the requested path + query string sent by the client.
// // Client requests:http://localhost:3000/users?id=5
// // req.url==  /users?id=5
