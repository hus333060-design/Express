import express from "express"; 
import http from "node:htp";

const app=express();

app.disable("x-powered-by");
app.get('/',(req,res)=>{
   res.end("Hello 👌"); 
   
})
app.get("/test", (req, res) => {
    res.end("Hello Test");
});


app.listen(4000,()=>{
    console.log("Server has been cereated on 4000 port");
    
})

// ExpressJS internally Node.js ke http module par hi based hai. Jab aap const app = express() likhte ho aur app.listen(3000) call karte ho, actually vo Node.js ka http.createServer() use kar raha hota hai.

// 🔎 Express as Abstraction Layer
// Express khud server nahi banata:
// Jab aap app.listen() call karte ho, to Express internally ye code run karta hai:
// app.listen = function listen() { 
// var server = http.createServer(this); 
// return server.listen.apply(server, arguments);
// };
// Matlab, ye express app ko HTTP server ke event listener ke roop me register karta hai.
// Express = Simplified Interface: