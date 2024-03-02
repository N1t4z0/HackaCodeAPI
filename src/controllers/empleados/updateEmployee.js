const prisma = require("../../db");

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, direccion, nacionalidad, celular, email, password, cargo, sueldo } = req.body;

  try {
    const existingEmployee = await prisma.empleados.findFirst({ where: { id_empleado: Number(id) } });

    if (!existingEmployee) {
      return res.status(404).json({ message: 'No se encontró ningún empleado con ese ID' });
    }

    const updatedEmployee = await prisma.empleados.update({
      where: { id_empleado: Number(id) },
      data: {
        nombre: nombre || existingEmployee.nombre,
        apellido: apellido || existingEmployee.apellido,
        direccion: direccion || existingEmployee.direccion,
        nacionalidad: nacionalidad || existingEmployee.nacionalidad,
        celular: celular || existingEmployee.celular,
        email: email || existingEmployee.email,
        password: password || existingEmployee.password,
        cargo: cargo || existingEmployee.cargo,
        sueldo: sueldo || existingEmployee.sueldo,
      },
    });

    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateEmployee;