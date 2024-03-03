const prisma = require("../../db");

const deletePackage = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.paquetesturisticos.delete({ where: { id_paquete: Number(id) } });
    res.status(200).json({ message: 'Paquete eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deletePackage;