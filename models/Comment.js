module.exports = function (sequelize, DataTypes) {
    const Comment = sequelize.define('Comment', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4]
        }
      },
      // user_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //       model: User,
      //       key: 'id'
      //   }
      // },
      // game_id: {
      //     type: DataTypes.INTEGER,
      //     allowNull: false,
      //     references: {
      //         model: 'game',
      //         key: 'id'
      //     }
      // }
    },
    {
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment'
    });
  
    return Comment;
  };