const prisma = require("../../db");

const updateClient = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, direccion, nacionalidad, celular, email, password } = req.body;

  try {
    const existingClient = await prisma.clientes.findUnique({ where: { id_cliente: Number(id) } });

    if (!existingClient) {
      return res.status(404).json({ message: 'No se encontró ningún cliente con ese ID' });
    }

    const updatedClient = await prisma.clientes.update({
      where: { id_cliente: Number(id) },
      data: {
        nombre: nombre || existingClient.nombre,
        apellido: apellido || existingClient.apellido,
        direccion: direccion || existingClient.direccion,
        nacionalidad: nacionalidad || existingClient.nacionalidad,
        celular: celular || existingClient.celular,
        email: email || existingClient.email,
        password: password || existingClient.password,
      },
    });

    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateClient;