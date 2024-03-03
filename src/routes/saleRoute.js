const { Router } = require("express");
const router = Router();
const saleControllers = require('../controllers/ventas');


router.get("/", saleControllers.getSale);
router.post("/create", saleControllers.createSale);
router.delete("/delete/:id", saleControllers.deleteSale);
router.put("/update/:id", saleControllers.updateSale);

module.exports = router;