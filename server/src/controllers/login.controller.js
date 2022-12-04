const login = require("../services/login.service");
const commonUtils = require("../utils/common.util");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SERECT;

async function authUser(req, res, next) {
  const { username, password } = req?.body;
  try {
    const userInfo = await login.auth(username, password);
    if (!username || !password) {
      res
        .status(200)
        .json(
          commonUtils.formatResponse(
            "Missing param username or password!",
            404,
            null,
          ),
        );
    } else if (userInfo?.length > 0) {
      const maxAge = 3 * 60 * 60;
      const token = jwt.sign(
        {
          id: userInfo[0]?.user_id,
          username: userInfo[0]?.username,
          role: userInfo[0]?.role,
        },
        jwtSecret,
        {
          expiresIn: maxAge, // 3hrs in sec
        },
      );
      res.status(201).json(
        commonUtils.formatResponse("Login success!", 201, {
          ...userInfo[0],
          token: token,
        }),
      );
    } else {
      res
        .status(200)
        .json(commonUtils.formatResponse("User not found!", 401, null));
    }
  } catch (err) {
    console.error(`Error while auth`, err.message);
    next(err);
  }
}

module.exports = {
  authUser,
};
