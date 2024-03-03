const prisma = require("../../db");

const createPackage = async (req, res) => {
  const { nombre_paquete, costo_paquete, url_image } = req.body;

  try {
    if (!nombre_paquete || typeof nombre_paquete !== 'string') {
      return res.status(400).json({ message: 'Nombre inválido' });
    }

    if (!costo_paquete || isNaN(costo_paquete)) {
      return res.status(400).json({ message: 'Costo de paquete inválido' });
    }
    if (!url_image || typeof url_image !== 'string') {
        return res.status(400).json({ message: 'Nombre inválido' });
      }

    const package = await prisma.paquetesturisticos.create({
      data: { nombre_paquete, costo_paquete, url_image },
    });

    res.status(200).json(package);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createPackage;