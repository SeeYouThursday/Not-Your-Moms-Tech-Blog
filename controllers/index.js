const router = require("express").Router();
const homeRoutes = require("./homeRoutes.js");
const apiRoutes = require("./api");

//View routes
router.use("/", homeRoutes);
//API routes
router.use("/api", apiRoutes);

module.exports = router;
