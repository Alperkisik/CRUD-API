const express = require('express');
const apiRouter = express.Router();

const users = require('./users');
apiRouter.use('/users',users);

module.exports = apiRouter;