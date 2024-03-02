const prisma = require("../../db");

const loginEmployee = async (req, res) => {
  const { email, password } = req.body;

  try {
    const employee = await prisma.empleados.findFirst({ where: { email } });

    if (!employee) {
      return res.status(404).json({ message: 'No se encontró ningún empleado con ese email' });
    }

    if (employee.password !== password) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

   
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = loginEmployee;