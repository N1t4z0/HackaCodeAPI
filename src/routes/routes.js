const { Router } = require("express");
const healthRoutes = require("./healthRoute");
const clientRoutes = require("./clientsRoute");
const employeeRoutes = require("./employeesRoute");
const servicesRoutes = require("./servicesRoutes");
const router = Router();

router.use("/health", healthRoutes);
router.use("/clients", clientRoutes);
router.use("/employees", employeeRoutes);
router.use("/services", servicesRoutes);


module.exports = router;
