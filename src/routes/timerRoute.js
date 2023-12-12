const express = require("express");
const router = express.Router();

router
    .route("/user_id/timer")
        .post(jwtMiddleware.verifyToken, timerController.createTimer)