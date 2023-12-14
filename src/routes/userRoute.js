const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const jwtMiddleware = require("../middlwares/jwtMiddlware")

router
    .route("/register")
        .post(userController.userRegister);

router
    .route("/login")
        .post(userController.userLogin);

router
    .route("/")
        .get(userController.listenAllUsers);
    
router
    .route("/:user_id")
    .all(jwtMiddleware.verifyToken)
        .put(userController.updateUser)
        .delete(userController.deleteUser);

module.exports = router;