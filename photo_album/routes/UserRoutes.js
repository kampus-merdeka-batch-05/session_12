const router = require("express").Router()

const UserController = require("../controllers/UserController")

router.get("/", UserController.getUsers)

module.exports = router