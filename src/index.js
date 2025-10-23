import express from "express";
import cors from "cors";
import cuentasRouter from "./routes/cuentas.routes.js"; 

const app = express();
const PORT = 3130; 


app.use(cors());
app.use(express.json());
app.use("/", cuentasRouter); 
app.get("/", (req, res) => {
res.send("<h1>Servidor funcionando correctamente!!!</h1>");
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
}
);