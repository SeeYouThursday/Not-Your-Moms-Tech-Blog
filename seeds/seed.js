// bring in models and seed json files
const { User, Post, Comment } = require('../models');
// const { comment_seeds, post_seeds, user_seeds } = require('./seeds');
const comments = require('./comment_seeds.json');
const posts = require('./post_seeds.json');
const users = require('./user_seeds.json');

//require sequelize
const sequelize = require('../config/connection');
//set up Database

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(users);

  await Post.bulkCreate(posts);

  await Comment.bulkCreate(comments);

  process.exit(0);
};

seedDatabase();
