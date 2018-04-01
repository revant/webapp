const server = require('frappejs/server');
const frappe = require('frappejs');
const config = require('../config');
const login = require('frappejs/utils/session');

module.exports = {
    async start() {
        await server.start({
            backend: 'sqlite',
            connectionParams: {dbPath: 'test.db'},
            staticPath: './www',
            config: config,
        });
    }
}
