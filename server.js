const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
	// Set the X-Total-Count header
	const totalCount = router.db.get('id').size();
	
	res.set('X-Total-Count', totalCount);
	next();
	});
	
	server.use(router);
	server.listen(5000, () => {
		console.log('JSON Server is running on http://localhost:5000');
	});
