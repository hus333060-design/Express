import express from "express";

const app = express();

app.get("/number", (req, res) => {
  res.json({ message : "hello brother" });
});

// agar ham chahte hai real number se rutue open like 12,5,232 to use hoga regex
// to write refex use :- //  this inside we give expression
  

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
