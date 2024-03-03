const prisma = require("../../db");

const getAllPackages = async (req, res) => {
  try {
    const packages = await prisma.paquetesturisticos.findMany(); //TODO: QUE INCUYA LOS SERVICIOS
    res.status(200).json(packages); //TODO QUE ESTE PAGINADO
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllPackages;