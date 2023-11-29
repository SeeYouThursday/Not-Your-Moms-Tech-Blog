const router = require('express').Router();
const Post = require('../../models/Post');
const withAuth = require('../../utils/auth');
const Comment = require('../../models/Comment');
//New Post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//New Comment
router.post('/comment', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Update Post
router.put('/:id', withAuth, async (req, res) => {
  try {
    await Post.update(
      { ...req.body, user_id: req.session.user_id },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//Delete Post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No Post found with this id!' });
      return;
    } else {
      res.status(200).json(postData);
    }
  } catch {
    res.status(500).json(err);
  }
});

module.exports = router;
