import express from "express";
import path from "path";
import mongoose from "mongoose";
import "dotenv/config";
import juegos_routes from "./routes/juegos_routes.js";
import categorias_routes from "./routes/categorias_routes.js";

const port = process.env.PORT;
const mongoDb = process.env.MONGO_URL;
console.log(mongoDb);

mongoose
  .connect(mongoDb)
  .then(() => console.log("conectado a DB"))
  .catch((err) => console.log("error al conectar" + err));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// html raiz
app.get("/file", (req, res) => {
  res.sendFile("./public/file.html", { root: path.resolve() });
});

// routes
app.use("/juego", juegos_routes);
app.use("/categoria", categorias_routes);

app.listen(port, function () {
  console.log("servidor ejecutando...");
});
