const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
// const wrapAsync = require("../utils/wraspAsync");
const passport = require("passport");
const { route } = require("./listing");
const User = require("../Models/user.js");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");

router
  .route("/signup")
  .get(userController.rendersignup)
  .post(wrapAsync(userController.signUp));

router
  .route("/login")
  .get(userController.renderlogin)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );

router.get("/logout", userController.logout);

module.exports = router;
