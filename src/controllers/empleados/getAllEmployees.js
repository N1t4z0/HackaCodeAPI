const prisma = require("../../db");

const getAllEmployees = async (req, res) => {
  try {
    const empleado = await prisma.empleados.findMany();
    res.status(200).json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllEmployees;