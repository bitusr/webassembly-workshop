const express = require('express')
const app = express()

// don't do in production!!!
app.use(express.static('./'))

app.listen(3000, () => console.log('Server is running on port 3000'))
