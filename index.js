'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3678

mongoose.connect('mongodb://localhost:27017/favorites',(err, res) => {
  if (err){
    throw err;
  }else{
    console.log('✅ ✅ ✅ Successful connection to DB')
    app.listen(port, function() {
      console.log(`✅ ✅ ✅ Favorites API REST running on http://localhost:${port}`)
    })
  }
})
