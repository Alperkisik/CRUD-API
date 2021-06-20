const express = require('express');
const userRouter = express.Router();

const readUser = require('./readUser');
const readAllUsers = require('./readAllUsers');
const createUser = require('./createUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');

userRouter.get('/', readAllUsers);
userRouter.get('/:id', readUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;
