const express = require('express')
const mockRoutes = require('./utils/register')
const mockMap = require('./utils/assign')

const app = express()

app.use(mockRoutes(mockMap))

app.listen(3000)
