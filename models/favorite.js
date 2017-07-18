'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FavoriteSchema = Schema({
  title: String,
  description: String,
  url: String
})

module.exports = mongoose.model('Favorite', FavoriteSchema)
