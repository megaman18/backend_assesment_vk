const express = require("express");

const tenant = require("./routes/tenantRoutes");
const user = require("./routes/userRoutes");
const router = express.Router();

router.use("/tenant", tenant);
router.use("/user", user);

module.exports = router;
