// .mjs extenstion :- It's just an explicit way of marking the file as an ES Module. so you don't need configure type:"module" in package.json

import path from "node:path"

// 1. path.join() :- It makes a proper path to combine the multiple path even they are written in wrong in way.
// Examples:-
// console.log(path.join('/tese','/hello'));  //    \tese\hello
// console.log(path.join('/tese','hello'));  //    \tese\hello -- here automatically configure of paths.
// console.log(path.join('/tese','hello','///////hq'));  //    \tese\hello\hq 

// We can it also normalization of  path

// 2. path.normalize()
// console.log(path.normalize('./hi///helo//ewwew')); // hi\helo\ewwew

// we can see path.join() is also normalize of path with combining of paths.

// 3. path.resolve() :- it resolves the path to absolute path. it takes the current working directory as a base path and resolves the given path to absolute path. it also normalize the path.
// console.log(path.resolve("jiii"));  // C:\Users\Anil\Desktop\Express\path_module\jiii
// const result = path.resolve("public", "images", "cat.jpg");
// console.log(result); // C:\Users\Anil\Desktop\Express\path_module\public\images\cat.jpg
// console.log(path.resolve('/h1','test')); //  see "/" it is making the path absolute path form the root directory.

// console.log(path.join('/h1','tese')); // \h1\tese but it doesn't make the path absolute path. it just combine the paths and normalization objectives.

// 4. to get a basename
// console.log(path.basename('/desktop/express/path_module'));  // path_module  it is the basename of this path.

// 5.To get a diectoory name
console.log(path.dirname('/desktop/express/path_module')); // /desktop/express it will return the directory name of this path. It will remove the basename from the path and return the directory name.






