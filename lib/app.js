const express = require('express')
const mockRoutes = require('./utils/register')
const mockMap = require('./utils/assign')

const app = express()
const port = process.argv.slice(2)[1]
app.use(mockRoutes(mockMap))
console.log('mock server listen on port 8080');
app.listen(port)
