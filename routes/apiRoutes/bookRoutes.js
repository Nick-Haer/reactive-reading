const bookController = require("../../controllers/bookcontroller");

const router = require("express").Router()


router.route("/saved")
.get(bookController.findAllSaved)

router.route("/save")
.post(bookController.saveBook)


router.route("/:title")
.get(bookController.bookSearch)

router.route("/:id")
.delete(bookController.deleteSelected)


module.exports = router