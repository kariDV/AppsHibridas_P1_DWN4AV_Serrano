import express from "express";
import path from "path";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/file", (req, res) => {
  res.sendFile("./public/file.html", { root: path.resolve() });
});

app.listen(3000, function () {
  console.log("server runnning...");
});
