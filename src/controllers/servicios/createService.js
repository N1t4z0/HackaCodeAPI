const prisma = require("../../db");
const { parse, format } = require('date-fns');

const createService = async (req, res) => {
  const { nombre, descripcion_breve, destino_servicio, fecha_inicio, fecha_fin, costo_servicio, url_image } = req.body;

  try {
    // Tus validaciones aquí...

    if (!nombre || typeof nombre !== 'string') {
      return res.status(400).json({ message: 'Nombre inválido' });
    }
    if (!descripcion_breve || typeof descripcion_breve !== 'string') {
        return res.status(400).json({ message: 'descripcion inválida' });
      }
      if (!destino_servicio || typeof destino_servicio !== 'string') {
        return res.status(400).json({ message: 'destino inválido' });
      }

    if (!costo_servicio || isNaN(costo_servicio)) {
      return res.status(400).json({ message: 'Costo de servicio inválido' });
    }
    if (!fecha_inicio) {
        return res.status(400).json({ message: 'Porfavor ingresar una fecha de inicio/ida' });
      }
    

    const fechaInicioString = fecha_inicio;
    const fechaInicio = parse(fechaInicioString, 'dd/MM/yyyy', new Date());
    const fechaInicioISO = format(fechaInicio, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

    let fechaFinISO;
    if (fecha_fin) {
      const fechaFinString = fecha_fin;
      const fechaFin = parse(fechaFinString, 'dd/MM/yyyy', new Date());
      fechaFinISO = format(fechaFin, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    }

    const service = await prisma.serviciosturisticos.create({
      data: { nombre, descripcion_breve, destino_servicio,fecha_inicio: fechaInicioISO, fecha_fin: fechaFinISO, costo_servicio, url_image },
    });

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createService;