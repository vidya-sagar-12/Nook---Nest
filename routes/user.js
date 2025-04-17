const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");

//RenderSignupForm and //Signup
router.route("/signup")
.get( userController.renderSignupForm)
.post( wrapAsync(userController.signup));


//RenderLoginForm and //Login
router.route("/login")
.get( userController.renderLoginForm)
.post( saveRedirectUrl, passport.authenticate("local", {failureRedirect: '/login', failureFlash: true}), userController.login);


//Logout
router.get("/logout", userController.logout);

module.exports = router;
