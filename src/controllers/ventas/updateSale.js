const prisma = require("../../db");

const updateSale = async (req, res) => {
  const { id } = req.params;
  const { fecha_venta, medio_pago, id_cliente, id_empleado, codigo_servicio, codigo_paquete } = req.body;

  try {
    const existingSale = await prisma.ventas.findFirst({ where: { num_venta: Number(id) } });

    if (!existingSale) {
      return res.status(404).json({ message: 'No se encontró ninguna venta con ese ID' });
    }

    const sale = await prisma.ventas.update({
      where: { num_venta: Number(id) },
      data: {
        fecha_venta: fecha_venta || existingSale.fecha_venta,
        medio_pago: medio_pago || existingSale.medio_pago,
        id_cliente: id_cliente || existingSale.id_cliente,
        id_empleado: id_empleado || existingSale.id_empleado,
        codigo_servicio: codigo_servicio || existingSale.codigo_servicio,
        codigo_paquete: codigo_paquete || existingSale.codigo_paquete,
      },
    });

    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateSale;