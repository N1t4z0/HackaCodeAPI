const { Router } = require("express");
const healthRoutes = require("./healthRoute");
const clientRoutes = require("./clientsRoute");
const router = Router();

router.use("/health", healthRoutes);
router.use("/clients", clientRoutes);


module.exports = router;
