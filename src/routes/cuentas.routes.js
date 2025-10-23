import express from "express";
import {
  getCuentas,
  getCuentaById,
  getCuentaByParam,
  getBalanceActivo
} from "../controllers/cuentas.controller.js";

const router = express.Router();

router.get("/cuentas", getCuentas);
router.get("/cuentas/:id", getCuentaById);
router.get("/cuentasBalance", getBalanceActivo);
router.get("/buscar", getCuentaByParam);

export default router;
