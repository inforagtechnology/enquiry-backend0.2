const express = require("express");
const {
  createRegistration,
  getRegistrationUser,
  deleteRegistration,
  updateRegistration,
  getRegistrationByMobile,
  getAllRegistrations,
} = require("../controller/registrationController");
const { authMiddleware, authorizeRoles } = require("../middlewares/authMiddleware");

const registrationRouter = express.Router();

registrationRouter.post("/register", createRegistration);
registrationRouter.get("/get_user/:id", authMiddleware, getRegistrationUser);
registrationRouter.get("/search/:mobile", authMiddleware, getRegistrationByMobile);
registrationRouter.get("/getall_registrations", authMiddleware, authorizeRoles("admin", "super-admin", "HR"), getAllRegistrations);
registrationRouter.put("/update_user/:id", authMiddleware, updateRegistration);
registrationRouter.delete("/delete_user/:id", authMiddleware, authorizeRoles("admin", "super-admin"), deleteRegistration);

module.exports = registrationRouter;





// const express = require("express");
// const router = express.Router();
// const { 
//   createRegistration, 
//   getRegistrationUser, 
//   getAllRegistrations, 
//   updateRegistration, 
//   deleteRegistration, 
//   getRegistrationByMobile 
// } = require("../controller/registrationController");

// // Import your authentication middleware
// const { protect } = require("../middlewares/authMiddleware"); 

// //  1. PUBLIC ROUTE: Anyone should be able to register! (No 'protect' middleware here)
// router.post("/register", createRegistration);

// // 2. PROTECTED ROUTES: Only authenticated users/admins can access these
// router.get("/all", protect, getAllRegistrations);
// router.get("/:id", protect, getRegistrationUser);
// router.put("/:id", protect, updateRegistration);
// router.delete("/:id", protect, deleteRegistration);
// router.get("/mobile/:mobile", protect, getRegistrationByMobile);

// module.exports = router;