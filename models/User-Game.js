const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User_Game extends Model {}

User_Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'user',
          key: 'id'
      }
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'game',
          key: 'id'
      }
    }
  },{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_game'
  });

  module.exports = User_Game;
  