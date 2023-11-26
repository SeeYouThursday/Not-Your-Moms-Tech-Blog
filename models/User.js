const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
    //check to make sure the entered password matches the hashed stored password
  }
}

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
          len: [8, 16],

          // require a pass length of at least 8 char
        },
      },
    },
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality -- hash the password
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // set up beforeUpdate lifecycle "hook" functionality -- hash the updated password
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'user',
  }
);

module.exports = User;
