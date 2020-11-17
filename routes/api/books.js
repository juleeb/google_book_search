const router = require("express").Router();
const booksController = require("../../controllers/bookControl");

// router matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// router matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;