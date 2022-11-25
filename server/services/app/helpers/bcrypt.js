const bcrypt = require('bcryptjs')

const salt = bcrypt.genSaltSync(10)
const passwordHash = (pass) => bcrypt.hashSync(pass,salt)
const comparePass = (pass,hashedPass) => bcrypt.compareSync(pass,hashedPass,salt)

module.exports = {passwordHash,comparePass}