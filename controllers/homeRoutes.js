const router = require("express").Router();
// check back on this

router.get("/", async (req, res) => {
  res.render("main");
});

module.exports = router;
