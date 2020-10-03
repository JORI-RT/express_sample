var ServerMock = require("mock-http-server");
// import ServerMock from 'mock-http-server'
// const axios = require('axios');
import axios from 'axios'


describe('テスト', () => {
    var server = new ServerMock({ host: "localhost", port: 9000 });
    beforeEach(function (done) {
        server.start(done);
    });

    afterEach(function (done) {
        server.stop(done);
    });

    test('sample', async (done) => {
        server.on({
            method: 'GET',
            path: '/resource',
            filter: (req) => {
                return req.originalUrl === '/resource'
            },
            reply: {
                status: 200,
                headers: { "content-type": "application" },
                body: 'hello world'
            }
        });
        const acutual = await axios.get('http://localhost:8003/')

        expect(acutual.data).toBe('hello world')
        done()
    })
})