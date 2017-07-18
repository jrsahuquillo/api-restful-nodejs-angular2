'use strict'
const Favorite = require('../models/favorite')

function test(req, res) {
  var name = req.params.name || `my friend`;
  res.status(200).send({message: `Hello ${name}!`})
}

function getFavorite(req, res) {
  let favoriteId = req.params.id

  Favorite.findById(favoriteId, function(err, favorite) {
    if(err) {
      res.status(500).send({message: 'Data return error'})
    }
    if(!favorite){
      res.status(404).send({message: 'Empty data'})
    }
    res.status(200).send({favorite})
  })
}

function getFavorites(req, res) {
  Favorite.find().sort('title').exec((err, favorites) => {
    if(err) {
      res.status(500).send({message: 'Data return error'})
    }
    if(!favorites){
      res.status(404).send({message: 'Empty data'})
    }
    res.status(200).send({favorites})
  })

}

function saveFavorite(req, res) {
  let favorite = new Favorite()
  let params = req.body

  favorite.title = params.title
  favorite.description = params.description
  favorite.url = params.url

  favorite.save((err, favoriteStored) => {
    if(err) {
      res.status(500).send({message: 'Saving error in server'})
    }
    res.status(200).send({favorite: favoriteStored})
  })
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
