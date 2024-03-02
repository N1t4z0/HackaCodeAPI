const prisma = require("../../db");

const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.empleados.delete({ where: { id_empleado: Number(id) } });
    res.status(200).json({ message: 'Empleado eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteEmployee;