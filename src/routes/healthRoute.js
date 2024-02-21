const { Router } = require("express");
const router = Router();
const { healthCheck } = require("../utils/health");

router.get("/", healthCheck);

module.exports = router;
