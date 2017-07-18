'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3678

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.listen(port, function() {
  console.log(`✅ ✅ ✅ Favorites API REST running on http://localhost:${port}`)
})
