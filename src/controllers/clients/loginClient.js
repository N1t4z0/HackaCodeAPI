const prisma = require("../../db");

const loginClient = async (req, res) => {
    
    const { email, password } = req.body;
    try {
    const client = await prisma.clientes.findFirst({ where: { email } });
        console.log("Valor de email:", email);
        console.log("Valor de password",password)
        console.log("Valor de cliente",client)
    if (!client) {
      return res.status(404).json({ message: 'No se encontró ningún cliente con ese email' });
    }

    if (client.password !== password) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = loginClient;