/*
*所有的路由接口
*/
const user = require('./user');


module.exports = app => {
	app.post('/login', user.login);
	app.post('/logout', user.logout);
	app.post('/loginAdmin', user.loginAdmin);
	app.post('/register', user.register);
	app.post('/delUser', user.delUser);
	app.get('/currentUser', user.currentUser);
	app.get('/getUserList', user.getUserList);
	
	
};
