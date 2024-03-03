const { Router } = require("express");
const router = Router();
const ServicesControllers = require('../controllers/servicios');


//  router.get("/", ServicesControllers.getAllServices);
//  router.get("/:id", ServicesControllers.getServiceById);
router.post("/create", ServicesControllers.createService);
//  router.put("/update/:id", ServicesControllers.updateService);
//  router.delete("/delete/:id", ServicesControllers.deleteService);
 //TODO: añadir endpoint que permita traer servicios por un filtro en la descripcion

module.exports = router;