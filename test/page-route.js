const { agent } = require('./config');

describe('Page route', () => {

    it('POST 200: /page/init, Success', done => {
        agent.post('/page/init').end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('totalPages');
            done();
        });
    });

    it('POST 200: /page/get-posts-by-page-index, Success', done => {
        agent.post('/page/get-posts-by-page-index')
            .send({ index: 1 })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('POST 404: /page/get-posts-by-page-index, Not Found', done => {
        agent.post('/page/get-posts-by-page-index')
            .send({ index: 999999999 })
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });
});
