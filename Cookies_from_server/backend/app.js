import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://127.0.0.1:5500",
  credentials: true
}));

app.get("/",  (req, res) => {
 
// res.set({
//   "Set-Cookie": "age=12; SameSite=None; Secure"
// });

// set multiple headers
// res.set({
//   "Set-Cookie": [
//     "age=12; SameSite=None; Secure",
//     "name=Anshu; SameSite=None; Secure",
//     "password=12333333; SameSite=None; Secure"
//   ]
// });

// Recommended way to save cookie
// res.cookie("name" ,"Anshu1", {
//   sameSite:"none",
//   secure:true,
//   maxAge:60  // it is in sec
// })
 
  console.log(req.headers.cookie);

  res.send("Done");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});