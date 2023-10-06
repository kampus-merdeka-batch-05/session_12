const {
  User,
  Photo
} = require("../models")

class UserController {
  static async getUsers(req, res) {
    try {
      const data = await User.findAll({
        include: Photo
      })

      res.status(200).json(data)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = UserController