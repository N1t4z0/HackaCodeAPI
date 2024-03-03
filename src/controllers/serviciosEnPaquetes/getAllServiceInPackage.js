const prisma = require("../../db");

const getAllServicesInPackage = async (req, res) => {
  try {
    const servicesInPackages = await prisma.serviciosenpaquetes.findMany({
      include: {
        serviciosturisticos: true,
        paquetesturisticos: true,
      },
    });
    res.status(200).json(servicesInPackages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllServicesInPackage;