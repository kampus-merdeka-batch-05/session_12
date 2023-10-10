const router = require("express").Router()

const userRoutes = require("./UserRoutes")
const photoRoutes = require("./PhotoRoutes")

const { authentication } = require("../middlewares/auth")

router.use("/photos", authentication, photoRoutes)
router.use("/users", userRoutes)

module.exports = router