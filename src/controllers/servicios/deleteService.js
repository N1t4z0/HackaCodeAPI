const prisma = require("../../db");

const deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.serviciosturisticos.delete({ where: { id_servicio: Number(id) } });
    res.status(200).json({ message: 'Servicio eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteService;