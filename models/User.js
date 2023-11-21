const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
        notEmpty: true,
      },
      password: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
          // require a pass length of at least 8 char
        },
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
