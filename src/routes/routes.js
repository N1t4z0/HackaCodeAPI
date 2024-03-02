const { Router } = require("express");
const healthRoutes = require("./healthRoute");
const clientRoutes = require("./clientsRoute");
const employeeRoutes = require("./employeesRoute");
const router = Router();

router.use("/health", healthRoutes);
router.use("/clients", clientRoutes);
router.use("/employees", employeeRoutes);


module.exports = router;
