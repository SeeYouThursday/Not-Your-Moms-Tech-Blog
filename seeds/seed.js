// bring in models and seed json files
const { User, Post, Comment } = require('../models');
const { comment_seeds, post_seeds, user_seeds } = require('../seeds');

//require sequelize
const sequelize = require('../config/connection');
//set up Database

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(user_seeds);

  await Post.bulkCreate(post_seeds);

  await Comment.bulkCreate(comment_seeds);
};

seedDatabase();
