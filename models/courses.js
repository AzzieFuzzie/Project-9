'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please provide a valid 'title'",
          },
          notEmpty: {
            msg: "Please provide a valid 'title'",
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please provide a valid 'description'",
          },
          notEmpty: {
            msg: "Please a valid 'description'",
          },
        },
      },
      estimatedTime: {
        type: DataTypes.STRING,
      },
      materialsNeeded: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelNametype: 'Courses',
    }
  );
  Courses.associate = (models) => {
    Courses.belongsTo(models.Users, {
      foreignKey: {
        fieldName: 'userId',
      },
    });
  };
  return Courses;
};
