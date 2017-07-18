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
  let favoriteId = req.params.id
  let update = req.body

  Favorite.findByIdAndUpdate(favoriteId, update, (err, favoriteUpdated) => {
    if(err) {
      res.status(500).send({message: 'Updating error in server'})
    }
    res.status(200).send({favorite: favoriteUpdated})
  })
}

function deleteFavorite(req, res) {
  let favoriteId = req.params.id

  Favorite.findById(favoriteId, function(err, favorite) {
    if(err) {
      res.status(500).send({message: 'Data return error'})
    }
    if(!favorite){
      res.status(404).send({message: 'Empty data'})
    } else {
      favorite.remove(err => {
        if(err) {
          res.status(500).send({message: 'Error deleting data'})
        }else{
          res.status(200).send({message: 'Deleted data'})
        }
      })
    }
  })
}

module.exports = {
  test,
  getFavorite,
  getFavorites,
  saveFavorite,
  updateFavorite,
  deleteFavorite
}
