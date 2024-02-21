const { Router } = require("express");
const healthRoutes = require("./healthRoute");
const router = Router();

router.use("/health", healthRoutes);


module.exports = router;
