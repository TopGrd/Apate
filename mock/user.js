module.exports = {
  ['POST /user'](req, res) {
    res.json({
      work: 's',
    })
  },

  ['GET /user'](req, res) {
    res.status(201).json({
      hollo: 'dd'
    })
  },
}
