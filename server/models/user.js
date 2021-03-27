'use strict';
const { Model } = require('sequelize');
const crypto = require('crypto');
const salt = require('../config/salt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, required: true, unique: true },
      password: {
        type: DataTypes.STRING,
        // allowNull: true,
        // validate: {
        //   isEmail: true,
        //   notEmpty: true,
        // },
      },
      googleId: DataTypes.STRING,
      kakaoId: DataTypes.STRING,
      githubId: DataTypes.STRING,
      naverId: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (data, option) => {
          var shasum = crypto.createHmac('sha512', salt.encryption);
          shasum.update(data.password);
          data.password = shasum.digest('hex');
        },
        beforeFind: (data, option) => {
          if (data.where.password) {
            var shasum = crypto.createHmac('sha512', salt.encryption);
            shasum.update(data.where.password);
            data.where.password = shasum.digest('hex');
          }
        },
      },
      sequelize,
      modelName: 'user',
    },
  );
  return User;
};
