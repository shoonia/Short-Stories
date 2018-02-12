const { agent } = require('./config');

describe('Page route', () => {

    describe('/init', () => {
        it('POST 200: Ok', done => {
            agent.post('/page/init').end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('totalPages');
                done();
            });
        });
    });

    describe('/get-posts-by-page-index', () => {
        it('POST 200: Ok', done => {
            agent.post('/page/get-posts-by-page-index')
                .send({ index: 1 })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
        it('POST 404: Not Found', done => {
            agent.post('/page/get-posts-by-page-index')
                .send({ index: 999999999 })
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

    describe('/get-post-by-id', () => {
        it('POST 200: Ok', done => {
            agent.post('/page/get-post-by-id')
                .send({ id: 1 })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id');
                    res.body.should.have.property('title');
                    res.body.should.have.property('text');
                    res.body.should.have.property('created_at');
                    done();
                });
        });
        it('POST 400: Bad Request (sub zero)', done => {
            agent.post('/page/get-post-by-id')
                .send({ id: -1 })
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
        it('POST 400: Bad Request (string)', done => {
            agent.post('/page/get-post-by-id')
                .send({ id: 'wrong' })
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
        it('POST 404: Not Found', done => {
            agent.post('/page/get-post-by-id')
                .send({ id: 999999999 })
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
});
