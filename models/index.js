// const { Post, Comment, User } = require('../models');
const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');
// SHOW INDEX FROM user;
// Posts belong to users //!necessary for page to load -causes eager err
Post.belongsTo(User, {
  foreignKey: 'user_id',
});
// Users have many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
});

// Users have many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
});

// Posts have many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

// Comments belong to users
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// Comments belong to posts
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = { Post, Comment, User };
