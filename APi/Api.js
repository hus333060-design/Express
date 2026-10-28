// What is a API?
// Application Program Interface It is set of rules and protocols that allows interaction one software to another.


// Key feactures of Api:-
// 1.Abstraction:- Expose the uncessary complexity.
// 2.Interporability :- It can be run of diff diff devices such as mobile, pc,tablet.
// 3..Automation:- Apis allows application to interact without user intervention,enabling auto tasks.
// 4.Scalability --> Developer can scale the API easily

// Rest Api
// REST is an architecture, not a protocol. It treats everything as a resource, which can be accessed through URLs using HTTP methods like GET, POST, PUT, and DELETE. REST APIs provide a flexible, lightweight way to exchange data—typically in JSON format—between clients and servers.

// Key Principles  [not Strict Rule so we can 😏😈]
// 1. Resource-Based: Each entity (like a user, post, or product) is treated as a resource and accessed via a unique URI.
// 2. Stateless: Every request from a client must contain all the information needed to process it. The server doesn’t store session data.
//    HTTP Methods: REST uses standard methods—GET (read), POST (create), PUT/PATCH (update), DELETE (remove).
// 4. Representation of Resources: Data is usually exchanged in JSON or XML format, depending on the request headers.
// // 5. Client-Server Architecture: The client and server are separate entities. The client handles UI/UX, while the server handles logic and data.

// Best Practices

// 1. Use Descriptive URIS
// /users/1
// /getUserOrder bad Practices
// 2. Follow HTTP Standards use the correct HTTP methods for correct use
// 3.version of API for Scalability
// 4. Provide Clear Error Message and Status Code
// 5. User Secure Authentication and authoriztion Implement such  as OAuth2 or JWT
// 6. Paginate Large Data Sets great for if there is large data
// 7. Rate Limiting Prevent bot attract and server crash also give status code 429 to many requests
// 8. Cache Responses
