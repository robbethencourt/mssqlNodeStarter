/* global describe, it */
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = ('http://localhost:3000')
const should = chai.should() // eslint-disable-line

chai.use(chaiHttp)

describe('Blobs', function () {
  it('should get hello world on / GET')
})

it('should get hello world on / GET', function (done) {
  chai.request(server)
    .get('/')
    .end(function (err, res) {
      if (err) throw err
      res.should.have.status(200)
      done()
    })
})
