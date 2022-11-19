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
            null
          )
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
        }
      );
      res
        .status(201)
        .json(
          commonUtils.formatResponse("Login success!", 201, {
            ...userInfo[0],
            token: token,
          })
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

async function createUser(req, res, next) {
  const { username, password, email, sex } = req?.body;
  try {
    if (!username || !password) {
      res
        .status(404)
        .json(
          commonUtils.formatResponse(
            "Missing param username or password!",
            404,
            null
          )
        );
    } else {
      const isExistUser = await login.isExistUserName(username);
      if (isExistUser) {
        res
          .status(401)
          .json(
            commonUtils.formatResponse("User name already exist!", 401, null)
          );
      } else {
        login
          .createUser(username, password, email, sex)
          .then((data) => {
            res
              .status(201)
              .json(
                commonUtils.formatResponse("Create user success!", 201, data[0])
              );
          })
          .catch(() => {
            res
              .status(404)
              .json(
                commonUtils.formatResponse("Create user failed!", 404, null)
              );
          });
      }
    }
  } catch (err) {
    console.error(`Error while auth`, err.message);
    next(err);
  }
}

async function updateUserInfo(req, res, next) {
  const { username, password, email, sex } = req?.body;
  try {
    if (!username || !password) {
      res
        .status(404)
        .json(
          commonUtils.formatResponse(
            "Missing param username or password!",
            404,
            null
          )
        );
    } else {
      const isExistUser = await login.isExistUserName(username);
      if (isExistUser) {
        login
          .updateUserInfo(username, password, email, sex)
          .then((data) => {
            res
              .status(201)
              .json(
                commonUtils.formatResponse(
                  "Update user info success!",
                  201,
                  data
                )
              );
          })
          .catch(() => {
            res
              .status(404)
              .json(
                commonUtils.formatResponse(
                  "Update user info failed!",
                  404,
                  null
                )
              );
          });
      } else {
        res
          .status(401)
          .json(commonUtils.formatResponse("User name not found!", 401, null));
      }
    }
  } catch (err) {
    console.error(`Error while auth`, err.message);
    next(err);
  }
}

module.exports = {
  authUser,
  createUser,
  updateUserInfo,
};
