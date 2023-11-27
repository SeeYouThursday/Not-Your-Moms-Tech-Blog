const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const apiRoutes = require('./api');
const postRoutes = require('./individual_post_route.js');

//View routes
router.use('/', homeRoutes);
// Individual Post Routes
router.use('/posts', postRoutes);

//API routes
router.use('/api', apiRoutes);

module.exports = router;
