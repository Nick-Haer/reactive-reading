const bookController = require("../../controllers/bookcontroller");

const express = require("express")

const router = express.Router


router.route("/saved")
.get(bookController.bookSearch)

router.route("/save")
.post(bookController.saveBook)


router.route("/:title")
.get(bookController.bookSearch)

router.route("/:id")
.delete(bookController.deleteSelected)


module.exports = router