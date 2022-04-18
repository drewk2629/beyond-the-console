const db = require("../models/Game");

module.exports = function () {
  return {
    getAllGames: function (req, res) {
      if (req.session.user) {
        db.findAll().then(function (gamesData) {
          console.log("GET all game", gamesData)
          res.json(gamesData);
        });
      } else {
        res.redirect("/")
      }
    },
    getSingleGame: function (req, res) {
      if (req.session.user) {
        db.findOne({ where: { id: req.params.userid } }).then(function (gamesData) {
          console.log("GET all users", gamesData)
          res.json(gamesData);
        });
      } else {
        res.redirect("/");
      }
    },
    newGame: function (req, res) {
      if (req.session.user) {
        db.create(req.body).then(function (gamesData) {
          console.log("GET all users", gamesData)
          res.json(gamesData);
        });
      } else {
        res.redirect("/");
      }
    },
  }
}