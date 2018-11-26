const chai = require('chai')
const expect = require('chai').expect
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('/GET tasks and abc', () => {
 it('it should GET tasks return 200', (done) => {
    chai.request('http://localhost:3000')
      .get('/tasks')
      .end((err, res) => {
        expect(res).to.have.status(200)
        done()
      })
  })
 it('it should GET abc return 404', (done) => {
    chai.request('http://localhost:3000')
      .get('/abc')
      .end((err, res) => {
        expect(res).to.have.status(404)
        done()
      })
  })
})
