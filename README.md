### Apate
Apate（Απατη） was the personification of deceit
### Description
A easy mock server
### usage
1. `npm install github:topgrd/Apate -S`  
2. In your `src` directory, add mock directory, add your own mock config js  
like `user.js`  
```js
//user.js
const Mock = require('mockjs')
const userData = Mock.mock({
  'data|12': [
    {
      name: '@name',
    },
  ]
})
module.exports = {
  ['POST /user'](req, res) {
    res.json({
      msg: 'add user success!',
      code: 0,
      data: {}
    })
  },

  ['GET /user'](req, res) {
    res.status(201).json({
      data: userData,
      code: 0,
      msg: 'query success'
    })
  },
}
```
3. add `"mock": "node node_modules/apate/index.js --p 8080"` in your `npm scripts`  
--p is your mock server port  
### reliable
* express
* mockjs

