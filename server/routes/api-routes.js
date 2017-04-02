const sql = require('mssql')
const config = require('../../config/mssqlConnection')

module.exports = function (app) {
  app.get('/api/test', function (req, res) {
    var conn = new sql.Connection(config)
    var request = new sql.Request(conn)

    conn.connect(function (err) {
      if (err) console.log(err)
      request.query('select * from NodeTestTable', function (err, recordset) {
        if (err) {
          console.log(err)
        } else {
          res.send(recordset)
        }
        conn.close()
      }) // end request.query()
    }) // end conn.connect()
  }) // end app.get('/api/test')
}
