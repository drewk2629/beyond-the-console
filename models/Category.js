module.exports = function (sequelize, DataTypes) {
    const Category = sequelize.define('Category', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    });
  
    return Category;
  };