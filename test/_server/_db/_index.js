const expect = require('chai').expect;
const {db} = require('../../config');

describe('Database', () => {
    it('Connect', done => {
        db.raw('SELECT 1 AS `test`').then(data => {
            const test = data[0][0].test;
            expect(test).to.be.a('number');
            expect(test).to.eql(1);
            done();
        });
    });
});
