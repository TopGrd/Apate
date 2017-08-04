const fs = require('fs')
const path = require('path')
const mock = {}
fs.readdirSync('./src/mock').forEach(function(file) {
  const realPath = path.resolve('src', 'mock', file)
  Object.assign(mock, require(realPath))
})

module.exports = mock
