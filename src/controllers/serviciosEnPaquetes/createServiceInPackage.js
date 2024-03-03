const prisma = require("../../db");

const createServiceInPackage = async (req, res) => {
  const { codigo_paquete, codigo_servicio } = req.body;

  try {
    const serviceInPackage = await prisma.serviciosenpaquetes.create({
      data: { codigo_paquete, codigo_servicio },
    });

    res.status(200).json(serviceInPackage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createServiceInPackage;