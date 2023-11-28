const router = require('express').Router();
// check back on this
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');

//Homepage Route
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['content'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

//TODO edit handlebars for individual posts
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['content', 'user_id'],
        },
      ],
    });
    const posts = postData.get({ plain: true });
    // const posts = postData.map((post) => post.get({ plain: true }));
    res.render('selected_post', {
      ...posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {}
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const myPosts = await Post.findAll({
      where: { user_id: req.session.id },
      include: [
        // {
        //   model: User,
        //   attributes: ['id'],
        // },
        {
          model: Comment,
          attributes: ['content'],
        },
      ],
    });

    const posts = myPosts.map((post) => post.get({ plain: true }));
    res.render('dashboard', { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create New Post
router.get('/create', withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('createPost', { logged_in: req.session.logged_in });
});

//login route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

//Sign In route
router.get('/signup', (req, res) => {
  res.render('signup');
});
module.exports = router;
