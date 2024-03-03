const prisma = require("../../db");

const getPackageById = async (req, res) => {
  const { id } = req.params;

  try {
    const package = await prisma.paquetesturisticos.findUnique({ where: { id_paquete: Number(id) } });

    if (!package) {
      return res.status(404).json({ message: 'No se encontró ningún paquete con ese ID' });
    }

    res.status(200).json(package);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPackageById;