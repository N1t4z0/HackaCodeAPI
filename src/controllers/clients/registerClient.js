const { parse,parseISO,format  } = require('date-fns');
const prisma = require("../../db");
const registerClient = async (req, res) => {
    const { nombre, apellido, direccion, dni, fecha_nac, nacionalidad, celular, email } = req.body;
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
      // if (!fecha_nac || !(fecha_nac instanceof Date)) {
      //   return res.status(400).json({ message: 'Fecha de nacimiento inválida' });
      // }
      if (!nacionalidad || typeof nacionalidad !== 'string') {
        return res.status(400).json({ message: 'Nacionalidad inválida' });
      }
      if (!celular || typeof celular !== 'string') {
        return res.status(400).json({ message: 'Celular inválido' });
      }
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ message: 'Email inválido' });
      }
      
const fechaNacString = fecha_nac; // Tu fecha en formato dd/mm/yyyy
const fechaNac = parse(fechaNacString, 'dd/MM/yyyy', new Date());
const fechaNacISO = format(fechaNac, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
console.log("Fecha de nacimiento:", fechaNacISO);

      console.log("Valor de email:", email);
      const existingEmail = await prisma.clientes.findFirst({
        where: { email: email },
      });
  
      if (existingEmail) {
        return res.status(400).json({ message: 'El email ya está en uso' });
      } else 
      {  const cliente = await prisma.clientes.create({
        data: { nombre, apellido, direccion, dni, 
        fecha_nac:fechaNacISO, nacionalidad, celular, email },
      });
      res.json(cliente);}
  

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = registerClient;