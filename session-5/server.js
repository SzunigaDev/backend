const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");
const queries = require("./queries");

const hostname = "127.0.0.1";
const port = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Usar las rutas de consultas
app.use("/api", queries);

// Servir archivos estáticos desde el directorio "public"
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
