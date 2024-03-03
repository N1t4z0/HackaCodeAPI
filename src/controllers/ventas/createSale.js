const prisma = require("../../db");
const { parse, format } = require('date-fns');

const createSale = async (req, res) => {
  const { fecha_venta, medio_pago, id_cliente, id_empleado, codigo_servicio, codigo_paquete } = req.body;

  try {
    const fechaVentaString = fecha_venta;
    const fechaVenta = parse(fechaVentaString, 'dd/MM/yyyy', new Date());
    const fechaVentaISO = format(fechaVenta, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

    const sale = await prisma.ventas.create({
      data: { fecha_venta: fechaVentaISO, medio_pago, id_cliente, id_empleado, codigo_servicio, codigo_paquete },
    });

    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createSale;