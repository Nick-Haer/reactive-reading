const bookController = require("../../controllers/bookcontroller");

const express = require("express")

const router = express.Router


router.route("/saved")
.get(bookRoutes.bookSearch)


router.route("/:title")
.get(bookRoutes.bookSearch)

router.route("/:id")
.delete(bookRoutes.deleteSelected)


module.exports = router