module.exports = function (sequelize, DataTypes) {
    const User_Game = sequelize.define('User_Game', {
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
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'user_game'
    });
  
    return User_Game;
  };
  