const { Router } = require("express");
const router = Router();
const SIPControllers = require('../controllers/serviciosEnPaquetes');


router.get("/", SIPControllers.getAllServicesInPackage);
router.post("/create", SIPControllers.createServiceInPackage);
router.delete("/delete/:id", SIPControllers.deleteServiceInPackage);

module.exports = router;