const healthCheck = (req, res) => {
  res.status(200).send("Tamo ready pa ganar la hackaton");
};

module.exports = {
  healthCheck,
};
