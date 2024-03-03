const prisma = require("../../db");

const getServiceById = async (req, res) => {
  const { id } = req.params;

  try {
    const service = await prisma.serviciosturisticos.findFirst({ where: { id_servicio: Number(id) } });

    if (!service) {
      return res.status(404).json({ message: 'No se encontró ningún servicio con ese ID' });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getServiceById;