require('dotenv').config();
process.env.PORT = 8080;
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.should();
chai.use(chaiHttp);

const agent = chai.request.agent(app);

module.exports = { agent };
