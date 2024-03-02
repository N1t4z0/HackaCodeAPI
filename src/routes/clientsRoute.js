const { Router } = require("express");
const router = Router();
const clientsControllers = require('../controllers/clients');


 router.get("/", clientsControllers.getAllClients);
 router.get("/login", clientsControllers.loginClient);
router.post("/register", clientsControllers.registerClient);
 router.put("/update/:id", clientsControllers.updateClient);
 router.delete("/delete/:id", clientsControllers.deleteClient);

module.exports = router;