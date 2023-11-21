//Used for the main blog post
const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");
const { User, Comments } = require("../models");

class Post extends Model {}

Post.init({
  id: {
    type: Datatypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Datatypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
  post: {
    type: Datatypes.INTEGER,
  },
  comment_id: {
    type: Datatypes.INTEGER,
    references: {
      model: Comments,
      key: "id",
    },
  },
});

module.exports = Post;
