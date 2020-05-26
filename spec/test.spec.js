let faker = require('faker');
let db = require('../models');

describe("A suite", function() {
  it("contains spec with an expectation", (done) => {
		expect(true).toBe(true);

		db.User.findAll({limit: 1}).then(users => {

			console.log(users[0].email);
			done();
		});
  });
});
