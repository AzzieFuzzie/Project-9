'use strict';

const bcrypt = require('bcryptjs');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'A first Name is required' },
        },
        notEmpty: {
          msg: 'Please provide a valid first name',
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'A last Name is required' },
        },
        notEmpty: {
          msg: 'Please provide a valid last name',
        },
      },
      emailaddress: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'The email you entered already exist',
        },
        validate: {
          notNull: { msg: 'A email is required' },
        },
        isEmail: {
          msg: 'Please provide a valid email',
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'A password is required password' },
        },
        notEmpty: {
          msg: 'Please provide a valid password',
        },
        len: {
          args: [6 - 15],
          msg: 'The password should be between 6-15 charcters in length',
        },
        set(val) {
          const hashedPassword = bcrypt.hashSync(val, 10);
          this.setDataValue('password', hashedPassword);
        },
      },
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
  Users.associate = (models) => {
    Users.hasMany(models.Courses, {
      foreignKey: {
        fieldName: 'userId',
        allowNull: false,
      },
    });
  };
  return Users;
};
