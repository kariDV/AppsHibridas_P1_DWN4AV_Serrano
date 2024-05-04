import express from "express";
import path from "path";
import "dotenv/config";
import juegos_routes from "./routes/juegos_routes.js";

const port = process.env.PORT;

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

// endpoints de prueba
// app.get("/saludo", (req, res) => {
//   res.send("¡Hola, amiguis!");
// });

app.listen(port, function () {
  console.log("servidor ejecutando...");
});
