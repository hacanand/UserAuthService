const express = require("express");
const UserController = require("../../controllers/user-controller");
const {validateAuthRequest, validateIsAdminRequest} = require("../../middlewares/index");
const router = express.Router();
router.post("/signup", validateAuthRequest,UserController.create);
router.delete("/signup/:id", UserController.destroy);
router.get("/signup/:id", UserController.getById);
router.post("/signin", validateAuthRequest, UserController.signIn);
router.get('/isAuthenticated', UserController.isAuthenticated)
router.get('/isAdmin',validateIsAdminRequest, UserController.isAdmin)
module.exports = router;
