'use strict'

function test(req, res) {
  var name = req.params.name || `my friend`;
  res.status(200).send({message: `Hello ${name}!`})
}

module.exports = {
  test
}
