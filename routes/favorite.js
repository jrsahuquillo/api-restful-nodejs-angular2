'use strict'

const express = require('express')
const favoriteController = require('../controllers/favorite')
const api = express.Router()

api.get('/prueba/:name?', favoriteController.test)
api.get('/favorite/:id', favoriteController.getFavorite)
api.post('/favorite', favoriteController.saveFavorite)
api.put('/favorite', favoriteController.updateFavorite)
api.delete('/favorite', favoriteController.deleteFavorite)

module.exports = api