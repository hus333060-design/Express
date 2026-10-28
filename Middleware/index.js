// # Express.js Middleware
// import express from "express";
// const app = express()
// app.listen(4000, () => {
//     console.log("Server listening on Port 4000");
// });

// => What is Middleware?
// A middleware function is a function that runs during the request-response cycle.
// It can:
// * process the incoming request
// * modify req or `res`
// * send a response
// * call next() to pass control to the next middleware

// Basic flow:
// Client
//   | HTTP Request
//   v
// Middleware
//   | next()
//   v
// Next Middleware / Route Handler
//   |
//   v
// HTTP Response
//   |
//   v
// Client

// Note:- Important :- A middleware function does **not necessarily have to send the response**.
// It can either:
// process request
//      |
//      +----> next() ----> next middleware
//      |
//      +----> send response

// => app.get() and Middleware
// app.get("/", (req, res) => {
//     res.send("Hello Brother 😂");
// });
// GET /
//  |
//  v
// (req, res) => { ... }
//  |
//  v
// res.send()
//  |
//  v
// Response
// The function `(req, res) => {}` is the **route handler** for `GET /`.
// It is better to call this a **route handler**, not simply "middleware".

// Express middleware is generally a function that participates in the request-response cycle, usually using:(req, res, next)

// A route handler can also be middleware-like in Express, but its main job is to handle a particular route and produce the response

// => Multiple Middleware Functions :- You can provide multiple functions for the same route:
// app.get(
//     "/",
//     (req, res, next) => {
//         console.log("Middleware 1");
//         res.write("hello 1\n");
//         next();
//     },
//     (req, res) => {
//         console.log("Middleware 2");
//         res.end("hello 2");
//     }
// );

// Flow:

// GET /
//  |
//  v
// Middleware 1
//  |
//  | res.write("hello 1")
//  |
//  | next()
//  v
// Middleware 2
//  |
//  | res.end("hello 2")
//  v
// Response finished


// =>  `next()`

// `next()` tells Express: > "This middleware is finished processing; continue to the next matching middleware/handler."
// Example:
// app.get(
//     "/",
//     (req, res, next) => {
//         console.log("Middleware 1");
//         next();
//     },
//     (req, res) => {
//         console.log("Middleware 2");
//         res.send("Hello");
//     }
// );

// --- If you don't call next()
// If the middleware neither sends a response nor calls `next()`:the request will remain unfinished and the client can keep waiting.
// (req, res, next) => {
    // console.log("Middleware 1");
// }


// => res.write(), res.end() and res.send()
// 1. res.write():- Writes data to the HTTP response.
// res.write("Hello");
// It does **not normally finish the response**.

// 2. res.end()  :- Finishes the HTTP response.
// res.end("Hello");
// or:
// res.write("Hello");
// res.end();

// 3. res.send() :- Express's convenient method for sending a response.
// res.send("Hello");
// It sends the response and completes it.

// => Types of Middleware
// 1. Application-level middleware
// 2. Router-level middleware
// 3. Built-in middleware
// 4. Third-party middleware
// 5. Error-handling middleware

// For the current lecture, focus on:
// 1. Request/normal middleware
// 2. Error-handling middleware

// # Normal / Request Middleware A normal middleware commonly has: (req, res, next)
// Example:
// app.get(
//     "/",
//     (req, res, next) => {
//         console.log("Middleware 1");
//         next();
//     },
//     (req, res) => {
//         res.send("Hello");
//     }
// );

// Its job can be to:
// * log requests
// * authenticate users
// * validate data
// * modify request/response
// * perform some processing
// * pass control using `next()`


// # Error-Handling Middleware
// Error-handling middleware has 4 parameters : -(err, req, res, next)
// The first parameter must be err.

// Example:
// app.use((err, req, res, next) => {
//     console.log(err);
//     res.status(500).send("Something went wrong");
// });

// => Passing an Error to Error Middleware
// A normal middleware can pass an error using:
// next(err);
// Example:

// app.get(
//     "/",
//     (req, res, next) => {
//         try {
//             console.log("Middleware 1");
//             // Some operation
//             next();
//         } catch (err) {
//             next(err);
//         }
//     },
//     (req, res) => {
//         console.log("Middleware 2");
//         res.send("Hello");
//     }
// );

// app.use((err, req, res, next) => {
//     console.log("Error handler Middleware");
//     res.status(500).send("Error");
// });

// Flow when there is no error:
// Request
//    |
//    v
// Middleware 1
//    |
//  next()
//    |
//    v
// Middleware 2
//    |
//  res.send()
//    |
//    v
// Response

// Flow when an error occurs:
// Request
//    |
//    v
// Middleware 1
//    |
//  error
//    |
// next(err)
//    |
//    v
// Error Middleware
//    |
//    v
// Error Response

// # Important Note :- 
// When you call: next(err);

// Express skips the remaining **normal middleware/handlers** and looks for an error-handling middleware:(err, req, res, next)
// ## Final Mental Model

//                 HTTP Request
//                      |
//                      v
//             Normal Middleware
//                      |
//              next() / next(err)
//                 /          \
//                /            \
//               v              v
//        Next Middleware    Error Middleware
//               |                 |
//               v                 v
//        Route Handler       Error Response
//               |
//               v
//         HTTP Response

