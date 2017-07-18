'use strict'

const express = require('express')
const favoriteController = require('../controllers/favorite')
const api = express.Router()

api.get('/prueba/:name?', favoriteController.test)

module.exports = api
