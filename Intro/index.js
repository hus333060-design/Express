// Express:- Express.js is a web framework for Node.js
// FrmaeWork:- Already made stucuture and privode common feactures, in which you can write code easily.
// install npm :- npm init -y
// to install Express :- npm i express

// => Use of express Js
import express from "express"; // use dubugger how will see it is an function and it has many properties and it is a function so we have to call it

const app=express();
//It will have also ger method

app.disable("x-powered-by");
app.get('/',(req,res)=>{
//   res.send("Hello 👌");   
  // It is send res into parts:-
//   res.setHeader("Content-Type",'text/html; charset=utf8');
//   res.end("Hello 👌");
  // when we uses res.send it pass so Contant-type by express
  // There also has been sent other headers as well such as Date and content-length and connection and keep-Alive , Keep-Alive. These are sending because we are making http server.
  // Note there also will be a header:- x-powered-by  it is noting telling client we are using express we have to disbale it

  // app.end()
   res.end("Hello 👌"); // it does not set a set header predefined of http header will be sent as it is like content-length and connection and keep-Alive , Keep-Alive
   
})

// to start server
app.listen(4000,()=>{
    console.log("Server has been cereated on 4000 port");
    
})