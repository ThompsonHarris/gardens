const apiRouter = require('express').Router();
const gardenRouter = require('./garden');
const memberRouter = require('./member');

apiRouter.use('/garden', gardenRouter);
apiRouter.use('/member', memberRouter);

module.exports = apiRouter;
