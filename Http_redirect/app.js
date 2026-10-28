import express from "express";

const app = express();

app.get("/directory", (req, res) => {
    console.log("Directory route hit");
  // res.set({
  //   location: "/folder"
  // })
  // res.status(301).end();

  // 2nd way
  res.redirect("/folder",301)
  // is ham kis bhi url me jaa sakte hai
  //  res.redirect(301, "https://chatgpt.com/");
});
app.get("/folder", (req, res) => {
  res.json({
    name: "images",
    files: ["Node.png", "js.webp"],
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// => HTTP Redirection

// ❓ What is Redirection?
// --Redirect ka matlab hota hai browser ko bolna:Is URL par mat raho, dusre URL par chalo

// Ye kaam hota hai:
// Status code se
// Location header se

// ⚙️ How Redirect Works (behind the scenes)
// erver response me bhejta hai:
// Status: 301 / 302 / etc.
// Location: /new-url
// Browser:
// 1 Old URL chhodta hai
// 2 Automatically new URL par request bhejta hai
