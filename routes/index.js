const router = require("express").router

const apiRoutes = require("./apiRoutes");

router.use("/api", apiRoutes)

module.exports = router;