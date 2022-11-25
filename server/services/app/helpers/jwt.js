const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

//create token (if authorized)
const createToken = (payload) => jwt.sign(payload, SECRET);

//verify token (authentication)
const verifyToken = (token) => jwt.verify(token, SECRET);

module.exports = {
  createToken,
  verifyToken,
};
