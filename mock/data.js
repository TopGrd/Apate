const Mock = require('mockjs')

const data = Mock.mock({
  'completed|12': [
    {
      'name|+1': 2008,
      'Task complete|200-1000': 1,
      'Cards Complete|200-1000': 1,
    },
  ],
})

module.exports = {
  ['GET /file'](req, res) {
    res.json({
      data: data,
    })
  },
}
