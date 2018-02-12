const { agent } = require('./config');

describe('Page route', () => {

    it('POST 200: /page/init, Success', done => {
        agent.post('/page/init').end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('totalPages');
            done();
        });
    });
});
