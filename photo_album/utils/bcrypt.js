const bcrypt = require("bcryptjs")

function hashPassword(plainPassword) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(plainPassword, salt);

  return hash
}

function comparePassword(plainPassword, hashedPassword) {
  
  return bcrypt.compareSync(plainPassword, hashedPassword)
}

module.exports = {
  hashPassword,
  comparePassword
}