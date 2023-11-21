const { Post, Comment, User } = require("../models");

// Users have many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

// Users have many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

// Posts belong to users
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// Posts have many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

// Comments belong to users
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// Comments belong to posts
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});
