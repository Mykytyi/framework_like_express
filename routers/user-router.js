const Router = require('../framework/Router');

const router = new Router();

const users = [
	{ id: 1, name: 'Nikitochek' },
	{ id: 2, name: 'Kir' }
];

router.get('/users', (req, res) => {
	console.log('Got a GET /users request');
	res.send(users);
});

router.post('/users', (req, res) => {
	console.log('Got a GET /posts request');
	const user = req.body;
	console.log('user body: ', user);
	res.end('YOU SEND REQUEST TO /POSTS');
});

module.exports = router;
