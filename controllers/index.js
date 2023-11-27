const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const apiRoutes = require('./api');
const postRoutes = require('./individual_post_route.js');

//View routes
router.use('/', homeRoutes);
// Individual Post Routes
// router.use('/dashboard', postRoutes);
// router.use('/post', postRoutes);
//API routes
router.use('/api', apiRoutes);
// router.use('/*', homeRoutes);

module.exports = router;
