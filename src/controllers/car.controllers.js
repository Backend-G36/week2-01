const catchError = require('../utils/catchError');
const Car = require('../models/Car');

const getAll = catchError(async (req, res) => {
  const result = await Car.findAll()
  return res.json(result)
});

const create = catchError(async (req, res) => {
  const result = await Car.create(req.body)
  return res.status(201).json(result)

})

const getOne = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Car.findByPk(id)
  if (!result) return res.sendStatus(404)
  return res.json(result)
})


const destroy = catchError(async (req, res) => {
  const { id } = req.params
  // const result = await Car.destroy({ where: { id: id } })
  const result = await Car.destroy({ where: { id } })
  if (!result) return res.sendStatus(404)
  return res.sendStatus(204)
})

module.exports = {
  getAll,
  create,
  getOne,
  destroy
}