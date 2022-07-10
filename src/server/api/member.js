const memberRouter = require('express').Router();
const { Member, Garden} = require('../models/index');

memberRouter.get('/',  (req, res, next) => {
    Member.findAll({
      include: { model: Garden },
    })
      .then((members) => {
        res.status(200).send(members);
      })
      .catch((e) => {
        res.status(500).send({ error: 'critical error retrieving members' });
      });
  });

  module.exports = memberRouter;