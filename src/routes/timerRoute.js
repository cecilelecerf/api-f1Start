module.exports = (app) => {
    const timerController = require("../controllers/timerController")
    
    app.route("/:id_user")
    .post(timerController.createTimer);
}