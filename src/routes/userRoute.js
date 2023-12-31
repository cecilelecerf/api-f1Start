const jwtMiddleware = require("../middlwares/jwtMiddlware")


module.exports = (app) => {
    const userController = require("../controllers/userController")
    
    app.route("/users/register")
        .post(userController.userRegister);
    app.route("/users/login")
        .post(userController.userLogin);
    app.route("/users")
        .get(userController.listenAllUsers);
    app.route("/users/:user_id")
        .all(jwtMiddleware.verifyToken)
            .get(userController.listenSingleUser)
            .put(userController.updateUser)
            .delete(userController.deleteUser);

}