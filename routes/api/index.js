const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes')

router.use('/users', userRoutes);
router.user('/posts', postRoutes);

module.exports = router;