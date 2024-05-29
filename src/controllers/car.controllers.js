const catchError = require('../utils/catchError');
const Car = require('../models/Car');

const getAll = catchError(async (req, res) => {
  const result = await Car.findAll()
  return res.json(result)
});

module.exports = {
  getAll
}