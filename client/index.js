const frappe = require('frappejs')
// start server

module.exports = {
    start() {
        frappe.desk.menu.addItem('OAuthClient', '#list/OAuthClient');
        frappe.desk.menu.addItem('Session', '#list/Session');
        frappe.desk.menu.addItem('User', '#list/User');
        
        frappe.router.default = '#list/Session';
        frappe.router.show(window.location.hash);
    }
}
