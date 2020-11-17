const router = require("express").Router();
const bookRoutes = require("./books");

//api book routes
router.use("/books", bookRoutes);

module.exports = router;