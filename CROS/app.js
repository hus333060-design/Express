// CORS
// CORS = Cross-Origin Resource Sharing
//
// It allows a browser running a frontend from one origin
// to make requests to a server having a different origin.
//
// Example:
//
// Frontend: http://localhost:5500
// Backend:  http://localhost:5000
//
// These are different origins because their ports are different.
//
// Browser's Same-Origin Policy (SOP) normally restricts
// JavaScript from reading responses from a different origin.
//
// CORS tells the browser:
// "This particular origin is allowed to access my response."


// Why do we use CORS?
//
// Suppose our frontend is running at:
//
// http://localhost:5500
//
// and backend is:
//
// http://localhost:5000
//
// They have different origins.
//
// We can explicitly allow only trusted frontend origins:

// app.use((req, res, next) => {

//     const allowedOrigins = [
//         "http://127.0.0.1:5500",
//         "http://localhost:5500",
//         "http://127.0.0.1:3000"
//     ];

//     const origin = req.headers.origin;

//     if (allowedOrigins.includes(origin)) {
//         res.set("Access-Control-Allow-Origin", origin);
//     }

//     next();
// });


// Allow any origin:
//
// res.set("Access-Control-Allow-Origin", "*");
//
// This means the browser may allow responses to be read
// by requests from any origin (subject to other CORS rules).


// CORS library:
//
// We can install the `cors` package:
//
// npm install cors
//
// It can handle CORS configuration for us and also handle things such as preflight requests.


// => Preflight requests
// All the request methods created Preflight request except these 3 methods does not do it such as get, Post , Head and also some header are allowed them not all
// if server allows them the CROS headers and Cros methods then server sends reposnse back other boomsakaka browser ko server bolta na mauna to thik nhi hai tere liye kuch na mere pass.

