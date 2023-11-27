const router = require('express').Router();
// check back on this
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');

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

    //Taken care of in handlebars page with helper
    // if (!postData) {
    //   return res.json({ message: 'No posts to display!' });
    // }

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get ALL Posts (and any comments if they exist)
//TODO finish this!
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const postData = await User.findAll({
//       include: [
//         { model: User, attributes: ['username'] },
//         { model: Comment, attributes: ['comment_id'] },
//       ],
//     });
//   } catch (err) {}
// });

//Get one post (and any comments if they exist)

//login route
// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/dashboard');
//     return;
//   }

//   res.render('login');
// });

//dashboard route
// router.get('/dashboard', (req, res) => {});

module.exports = router;
