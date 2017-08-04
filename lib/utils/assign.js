const fs = require('fs')
const path = require('path')
const mock = {}
fs.readdirSync('./mock').forEach(function(file) {
  console.log(file);
  Object.assign(mock, require('../mock/' + file))
})

module.exports = mock
