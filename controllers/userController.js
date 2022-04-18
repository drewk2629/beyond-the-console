
const db = require("../models/user");

module.exports = function () {
  return {
    getAllUser: function (req, res) {
      if (req.session.user) {
        db.findAll().then(function (userData) {
          console.log("GET all users", userData)
          res.json(userData);
        });
      } else {
        res.redirect("/")
      }
    },

    getSingleUser: function (req, res) {
      if (req.session.user) {
        db.findOne({ where: { id: req.params.userid } }).then(function (userData) {
          console.log("GET all users", userData)
          res.json(userData);
        });
      } else {
        res.redirect("/")
      }
    },
    newUser: function (req, res) {
      if (req.session.user) {
        db.create(req.body).then(function (userData) {
          console.log("GET all users", userData)
          res.json(userData);
        });
      } else {
        res.redirect("/")

      }
    },
  }
}