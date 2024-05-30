const { getAll, create, getOne, destroy, update } = require('../controllers/car.controllers');

const express = require('express');

const carRouter = express.Router();


//rutas estaticas
carRouter.route('/') //-> /cars
  .get(getAll)
  .post(create)

//grupo de rutas dinamicas
carRouter.route('/:id') /// -> /cars/id
  .get(getOne)
  .delete(destroy)
  .put(update)

module.exports = carRouter;