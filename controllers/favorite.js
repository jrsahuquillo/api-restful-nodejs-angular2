'use strict'

function test(req, res) {
  var name = req.params.name || `my friend`;
  res.status(200).send({message: `Hello ${name}!`})
}

function getFavorite(req, res) {
  let favoriteId = req.params.id
  res.status(200).send({data: favoriteId})
}

function getFavorites(req, res) {

}

function saveFavorite(req, res) {
  let params = req.body
  res.status(200).send({favorite: params})
}

function updateFavorite(req, res) {
  let params = req.body
  res.status(200).send({update: true, favorite: params})
}

function deleteFavorite(req, res) {
  let favoriteId = req.params.id
  res.status(200).send({delete: true, data: favoriteId})
}

module.exports = {
  test,
  getFavorite,
  getFavorites,
  saveFavorite,
  updateFavorite,
  deleteFavorite
}
