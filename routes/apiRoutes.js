const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const app = (passport, db) => {
  console.log("in routes")
  const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);
  const UserController = require("../controllers/userController")(db);
  // Authentication
  router.post('/register', AuthController.register);
  router.post('/login', AuthController.login);
  router.get('/logout', AuthController.logout);
  router.put('/user/:id', ensureAuthenticated, AuthController.updateUser);
  router.delete('/user/:id', ensureAuthenticated, AuthController.deleteUser);
  router.post('/user/confirm', AuthController.confirmAuth);

  // App
   router.get('/examples', AppController.getExamples);
   router.post('/examples', AppController.createExample);
   router.delete('/examples/:id', AppController.deleteExample);

  //User Routes
  // TODO: This api is not working correctly 
  // FIXME: 
  //router.get("/user/all", UserController.getAllUsers)
  return router;
};

module.exports = app;
