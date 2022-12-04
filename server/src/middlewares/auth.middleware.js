const jwt = require("jsonwebtoken");
const { extractToken } = require("../utils/common.util");
const jwtSecret = process.env.JWT_SERECT;

const verifyToken = (req, res, next) => {
  const token = extractToken(req);

  if (token) {
    jwt.verify(token, jwtSecret, (err) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      } else {
        next();
      }
    });
  } else {
    return res
      .status(401)
      .json({ message: "Not authorized, token not available" });
  }
};

module.exports = verifyToken;
