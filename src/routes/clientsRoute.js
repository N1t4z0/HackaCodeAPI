const { Router } = require("express");
const router = Router();
const clientsControllers = require('../controllers/clients');


 router.get("/", clientsControllers.getAllClients);
// router.get("/login/:id", getClient);
router.post("/register", clientsControllers.registerClient);
// router.put("/update/:id", updateClient);
// router.delete("/delete/:id", deleteClient);

module.exports = router;