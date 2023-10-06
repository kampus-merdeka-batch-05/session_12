const router = require("express").Router()

const userRoutes = require("./UserRoutes")
const photoRoutes = require("./PhotoRoutes")

router.use("/photos", photoRoutes)
router.use("/users", userRoutes)

module.exports = router