'use strict'

const app = require('./app')
const port = process.env.PORT || 3678


app.listen(port, function() {
  console.log(`✅ ✅ ✅ Favorites API REST running on http://localhost:${port}`)
})
