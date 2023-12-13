module.exports = (app) => {
    const timerController = require("../controllers/timerController")
    
    app.route("/timer/:user_id")
    .post(timerController.createTimer);
}