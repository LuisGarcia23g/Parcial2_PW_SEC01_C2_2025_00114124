import { cuentas } from "../data/cuentas.js";

//Obtener todas las cuentas
export const getCuentas = (req, res) => {
  res.json({
    count: cuentas.length,
    data: cuentas
  });
};

//Obtener cuenta por ID
export const getCuentaById = (req, res) => {
  const { id } = req.params;
  const cuenta = cuentas.find(c => c._id === id);

  if (cuenta) {
    res.json({ finded: true, account: cuenta });
  } else {
    res.json({ finded: false });
  }
};

//Buscar por parámetro (id, client o gender)
export const getCuentaByParam = (req, res) => {
  const { queryParam } = req.query;
  if (!queryParam) {
    return res.status(400).json({ finded: false, message: "Debe enviar queryParam" });
  }

  const resultados = cuentas.filter(
    c =>
      c._id === queryParam ||
      c.client.toLowerCase().includes(queryParam.toLowerCase()) ||
      c.gender.toLowerCase() === queryParam.toLowerCase()
  );

  if (resultados.length === 0) {
    return res.json({ finded: false });
  }

  if (resultados.length === 1) {
    return res.json({ finded: true, account: resultados[0] });
  }

  return res.json({ finded: true, data: resultados });
};

//Obtener balance total de cuentas activas
export const getBalanceActivo = (req, res) => {
  const activas = cuentas.filter(c => c.isActive);
  if (activas.length === 0) {
    return res.json({ status: false, accountBalance: 0 });
  }

  const total = activas.reduce((sum, c) => {
    const num = Number(c.balance.replace(/[^0-9.-]+/g, ""));
    return sum + num;
  }, 0);

  res.json({ status: true, accountBalance: total });
};

