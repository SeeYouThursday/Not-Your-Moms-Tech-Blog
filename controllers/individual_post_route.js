const router = require('express').Router();
// check back on this
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');

router.get('/:id', withAuth, async (req, res) => {
  try {
    console.log(req.params.id);
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User }, { model: Comment }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
