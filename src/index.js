import express from "express";
import cors from "cors";

const app = express();
const PORT = 3130;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>✅ Servidor funcionando correctamente</h1>");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
