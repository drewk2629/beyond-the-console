'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '/../config/config.js'))[env];
const db = {};
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

db.Game.belongsTo(db.Category, {
  foreignKey: 'category_id'
});

db.Category.hasMany(db.Game, {
  foreignKey: 'game_id'
});

db.Comment.belongsTo(db.User, {
  foreignKey: 'user_id'
});

db.Comment.belongsTo(db.Game, {
  foreignKey: 'game_id'
});

db.User.hasMany(db.Comment, {
  foreignKey: 'user_id'
});

db.Game.hasMany(db.Comment, {
  foreignKey: 'game_id'
});

db.User.belongsToMany(db.Game, {
  through: db.User_Game,
  as: 'user_game',
  foreignKey: 'game_id'
});

db.Game.belongsToMany(db.User, {
  through: db.User_Game,
  as: 'user_game',
  foreignKey: 'user_id'
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
