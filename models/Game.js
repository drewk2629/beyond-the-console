module.exports = function (sequelize, DataTypes) {
  const Game = sequelize.define('Game', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Game already exists'
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // category_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'category',
    //     key: 'id'
    //   }
    // }
  },{
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'game'
  });

  return Game;
};
