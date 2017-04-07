const sql = require('mssql')
const config = require('../../config/mssqlConnection')

module.exports = function (app) {
  app.get('/api/test', function (req, res) {
    sql.connect(config)
      .then(() => {
        return sql.query`select * from NodeTestTable`
      })
      .then(result => {
        res.send(result)
      })
      .catch(err => {
        res.send(`error from database: ${err}`)
      }) // end sql.connect()
    sql.on('error', err => {
      res.send(`error from database: ${err}`)
    }) // end sql.on()
  }) // end app.get('/api/test')
}
