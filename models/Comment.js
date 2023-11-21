const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");
const { User, Post } = require(".");

class Comments extends Model {}

Comment.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: Datatypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    post_id: {
      type: Datatypes.INTEGER,
      references: {
        model: Post,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: "Comments",
  }
);

module.exports = Comments;
