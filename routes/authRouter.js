const express = require("express");
const router = express.Router();
const { signup,verifyEmail,login, forgotPassword, resetPassword, resendVerification } = require("../controller/authcontroller");

router.post("/signup", signup);
router.post("/login", login);
 router.get("/verify/:token", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/resend-verification", resendVerification);

module.exports = router;


// const express =require("express");
// const router = express.Router();
// const {signup,login,verifyEmail,forgotPassword,resetPassword} = require("../controller/authcontroller")

// router.post("/signup", signup,);
// router.post("/login", login);
// router.get("/verify/:toekn", verifyEmail );
// router.post("/forgot-passsword", forgotPassword );
// router.post ("/reset-password" , resetPassword)

// module.exports  = router;