const express = require("express");
const router = express.Router();
const login = require("../controllers/login.controller");

router.post("/", login.authUser);

router.post("/createUser", login.createUser);

router.post("/updateUserInfo", login.updateUserInfo);

module.exports = router;
