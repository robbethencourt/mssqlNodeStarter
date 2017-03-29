const sql = require('mssql')
const config = require('../../config/mssqlConnection')

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send('index.html')
  })
  app.get('/api/test', function (req, res) {
    console.log('response from react')
    var conn = new sql.Connection(config)
    var request = new sql.Request(conn)

    conn.connect(function (err) {
      if (err) console.log(err)
      request.query('select * from NodeTestTable', function (err, recordset) {
        if (err) {
          console.log(err)
        } else {
          console.log(recordset)
          res.send(recordset)
        }
        conn.close()
      })
    })
  })
}
