module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send('index.html')
  }) // end app.get('/')
}
