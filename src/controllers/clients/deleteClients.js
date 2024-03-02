const prisma = require("../../db");

const deleteClient = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.clientes.delete({ where: { id_cliente: Number(id) } });
    res.status(200).json({ message: 'Cliente eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteClient;