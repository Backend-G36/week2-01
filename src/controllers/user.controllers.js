const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async (req, res) => {
  const result = await User.findAll()
  return res.json(result)
});

module.exports = {
  getAll
}