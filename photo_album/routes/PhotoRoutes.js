const router = require("express").Router()
const PhotoController = require("../controllers/PhotoController")

router.get("/", PhotoController.getAllPhotos)
router.get("/:id", PhotoController.getPhotoById)
router.post("/", PhotoController.addPhoto)
router.put("/:id", PhotoController.updatePhoto)
router.delete("/:id", PhotoController.deletePhotoById)

module.exports = router