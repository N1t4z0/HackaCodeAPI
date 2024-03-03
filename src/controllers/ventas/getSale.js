const prisma = require("../../db");

const getSale = async (req, res) => {
  const { id } = req.params;

  try {
    const sale = await prisma.ventas.findFirst({
      where: { num_venta: Number(id) },
      include: {
        paquetesturisticos: true,
        serviciosturisticos: true,
        clientes: true,
        empleados: true,
      },
    });

    if (!sale) {
      return res.status(404).json({ message: 'No se encontró ninguna venta con ese ID' });
    }

    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getSale;