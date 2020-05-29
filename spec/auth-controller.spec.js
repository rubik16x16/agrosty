const axios = require('axios').default;

describe('Auth controller', () => {

	it('should register a new user', (done) => {

		let user = {
			email: 'test@g.com',
			password: 'secret'
		};

		axios.post('http://localhost:3000/register', user).then(res => {

			expect(res.status).toBe(201);
		}).catch(e => {

			console.log(e);
		}).then(() => {

			done();
		});
	});

	it('should login a user', (done) => {

		let user = {
			email: 'test@g.com',
			password: 'secret'
		};

		axios.post('http://localhost:3000/login', user).then(res => {

			// expect(res.status).toBe(201);
			// console.log(res.data);
		}).catch(e => {

			console.log(e.response.data);
		}).then(() => {

			done();
		});
	});

	it('this route should be protected ', (done) => {

		let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZy5jb20iLCJpYXQiOjE1OTA3MTA2Nzl9.p49YllzEQygNJoBP5rooMR3592wWXCkAdPczspK6MEA';

		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

		axios.get('http://localhost:3000/protected-route').then(res => {

			// expect(res.status).toBe(201);
			console.log(res.data);
		}).catch(e => {

			console.log(e.response.status);
		}).then(() => {

			done();
		});
	});
});
