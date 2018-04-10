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
        // let sessions = await frappe.db.getAll({doctype:'Session'});
        // for (const key in sessions) {
        //     if (sessions.hasOwnProperty(key)) {
        //         const session = sessions[key];
        //         console.log(session);
        //         frappe.db.delete('Session', session.name);
        //     }
        // }
    }
}
