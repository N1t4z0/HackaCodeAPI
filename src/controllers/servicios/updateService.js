const prisma = require("../../db");
const { parse, format } = require('date-fns');

const updateService = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion_breve, destino_servicio, fecha_inicio, fecha_fin, costo_servicio, url_image } = req.body;

  try {
    const existingService = await prisma.serviciosturisticos.findFirst({ where: { id_servicio: Number(id) } });

    if (!existingService) {
      return res.status(404).json({ message: 'No se encontró ningún servicio con ese ID' });
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

    const service = await prisma.serviciosturisticos.update({
        where: { id_servicio: Number(id) },
        data: {
          nombre: nombre || existingService.nombre,
          descripcion_breve: descripcion_breve || existingService.descripcion_breve,
          destino_servicio: destino_servicio || existingService.destino_servicio,
          fecha_inicio: fechaInicioISO || existingService.fecha_inicio,
          fecha_fin: fechaFinISO || existingService.fecha_fin,
          costo_servicio: costo_servicio || existingService.costo_servicio,
          url_image: url_image || existingService.url_image,
        },
      });

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateService;