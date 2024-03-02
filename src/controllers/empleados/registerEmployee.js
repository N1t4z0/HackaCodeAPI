const { parse, format } = require('date-fns');
const prisma = require("../../db");

const registerEmployee = async (req, res) => {
  const { nombre, apellido, direccion, dni, fecha_nac, nacionalidad, celular, email, password, cargo, sueldo } = req.body;

  try {
    console.log("ke onda tirrin entraste al registro")
    if (!nombre || typeof nombre !== 'string') {
      return res.status(400).json({ message: 'Nombre inválido' });
    }
    if (!apellido || typeof apellido !== 'string') {
      return res.status(400).json({ message: 'Apellido inválido' });
    }
    if (!direccion || typeof direccion !== 'string') {
      return res.status(400).json({ message: 'Dirección inválida' });
    }
    if (!dni || typeof dni !== 'string') {
      return res.status(400).json({ message: 'DNI inválido' });
    }
    if (!password || typeof password !== 'string') {
      return res.status(400).json({ message: 'password inválido o vacio' });
    }
    if (!nacionalidad || typeof nacionalidad !== 'string') {
      return res.status(400).json({ message: 'Nacionalidad inválida' });
    }
    if (!celular || typeof celular !== 'string') {
      return res.status(400).json({ message: 'Celular inválido' });
    }
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ message: 'Email inválido' });
    }

    if (!cargo || typeof cargo !== 'string') {
      return res.status(400).json({ message: 'Cargo inválido' });
    }

    if (!sueldo || isNaN(sueldo)) {
        return res.status(400).json({ message: 'Sueldo inválido' });
      }

    const fechaNacString = fecha_nac;
    const fechaNac = parse(fechaNacString, 'dd/MM/yyyy', new Date());
    const fechaNacISO = format(fechaNac, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

    const existingEmail = await prisma.empleados.findFirst({
      where: { email: email },
    });

    if (existingEmail) {
      return res.status(400).json({ message: 'El email ya está en uso' });
    } else {
      const empleado = await prisma.empleados.create({
        data: { nombre, apellido, direccion, dni, fecha_nac: fechaNacISO, nacionalidad, celular, email, password, cargo, sueldo },
      });
      res.json(empleado);
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = registerEmployee;