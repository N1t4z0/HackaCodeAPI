const prisma = require("../../db");

const deleteSale = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.ventas.delete({ where: { num_venta: Number(id) } });
    res.status(200).json({ message: 'Venta eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteSale;