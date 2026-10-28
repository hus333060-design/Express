import express from "express";

const app = express();

app.use(express.static("public"));

// To parse data of enctype="text/plain" in req.body()
app.use(express.text())

// T0 parse data of multipart-data use multer libary

// To parse data of enctype="application/x-www-form-urlencoded" in req.bidy
// app.use(express.urlencoded())


// but when data is send by from of js or react
// app.use(express.json()) but header is supposed to be application/json in clint-site


app.post("/user", (req, res) => {
  req.on("data", (chunk) => {
    console.log(chunk.toString());
  });

   req.on("end", () => {
    res.json({ message: "Got Data" });
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
