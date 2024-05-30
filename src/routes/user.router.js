const { getAll, create, getOne, destroy, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

//!rutas estaticas
userRouter.route("/")
  .get(getAll)
  .post(create)

//!rutas dinamicas
userRouter.route("/:id")
  .get(getOne)
  .delete(destroy)
  .put(update)

module.exports = userRouter;