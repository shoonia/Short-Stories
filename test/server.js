const { agent } = require('./config');

describe('Server running', () => {

    it('GET 200 /, Success', done => {
        agent.get('/').end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});
