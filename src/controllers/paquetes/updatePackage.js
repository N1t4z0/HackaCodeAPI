const prisma = require("../../db");

const updatePackage = async (req, res) => {
  const { id } = req.params;
  const { nombre_paquete, costo_paquete, url_image } = req.body;

  try {
    const existingPackage = await prisma.paquetesturisticos.findFirst({ where: { id_paquete: Number(id) } });

    if (!existingPackage) {
      return res.status(404).json({ message: 'No se encontró ningún paquete con ese ID' });
    }

    const package = await prisma.paquetesturisticos.update({
      where: { id_paquete: Number(id) },
      data: {
        nombre_paquete: nombre_paquete || existingPackage.nombre_paquete,
        costo_paquete: costo_paquete || existingPackage.costo_paquete,
        url_image: url_image || existingPackage.url_image,
      },
    });

    res.status(200).json(package);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updatePackage;