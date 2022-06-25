const Game = require('./Game');
const Category = require('./Category');
const Review = require('./Review');
const User_Game= require('./User-Game');
const User = require('./user');

Game.belongsTo(Category, {
  foreignKey: 'category_id'
});

Category.hasMany(Game, {
  foreignKey: 'game_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

Review.belongsTo(Game, {
  foreignKey: 'game_id'
});

User.hasMany(Review, {
  foreignKey: 'user_id'
});

Game.hasMany(Review, {
  foreignKey: 'game_id'
});

User.hasMany(Game, {
  foreignKey: 'user_id'
});

Game.belongsTo(User, {
  foreignKey: 'user_id'
});

User.belongsToMany(Game, {
  through: User_Game,
  foreignKey: 'game_id'
});

Game.belongsToMany(User, {
  through: User_Game,
  foreignKey: 'user_id'
});

module.exports = { Game, Category, Review, User_Game, User };
