const router = require('express').Router();
// check back on this
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('main');
});

//Get ALL Posts (and any comments if they exist)
//TODO finish this!
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await User.findAll({
      include: [
        { model: User, attributes: ['username'] },
        { model: Comment, attributes: ['comment_id'] },
      ],
    });
  } catch (err) {}
});

//Get one post (and any comments if they exist)

module.exports = router;
