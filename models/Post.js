//Used for the main blog post
const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');
// const { User, Comment } = require("../models");

class Post extends Model {}

Post.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Datatypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    content: {
      type: Datatypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    comment_id: {
      type: Datatypes.INTEGER,
      references: {
        model: 'Comment',
        key: 'id',
      },
    },
    date: {
      type: Datatypes.DATEONLY,
      allowNull: false,
      defaultValue: Datatypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
