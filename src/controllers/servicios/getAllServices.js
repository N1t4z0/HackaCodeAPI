const prisma = require("../../db");

const getAllServices = async (req, res) => {
  try {
    const services = await prisma.serviciosturisticos.findMany();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllServices;