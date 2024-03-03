const prisma = require("../../db");

const deleteServiceInPackage = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.serviciosenpaquetes.delete({ where: { id: Number(id) } });
    res.status(200).json({ message: 'Servicio en paquete eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteServiceInPackage;