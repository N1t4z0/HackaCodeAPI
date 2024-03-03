const { Router } = require("express");
const router = Router();
const ServicesControllers = require('../controllers/paquetes');


 router.get("/", ServicesControllers.getAllPackages);
 router.get("/:id", ServicesControllers.getPackageById);
router.post("/create", ServicesControllers.createPackage);
   router.put("/update/:id", ServicesControllers.updatePackage);
//   router.delete("/delete/:id", ServicesControllers.deleteSPackage);
 //TODO: añadir endpoint que permita traer servicios por un filtro en la descripcion

module.exports = router;