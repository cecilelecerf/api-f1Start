const jwtMiddleware = require("../middlwares/jwtMiddlware")
module.exports = (app) => {
    const timerController = require("../controllers/timerController")
    
    app.route("/timer/:user_id")
        .post(jwtMiddleware.verifyToken, timerController.createTimer);
    app.route("/timer/avg/:user_id")
        .get(jwtMiddleware.verifyToken, timerController.averageTimer);

}