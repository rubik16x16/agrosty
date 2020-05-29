let faker = require('faker');
let db = require('../models');

describe("A suite", function() {
  it("contains spec with an expectation", (done) => {
		expect(true).toBe(true);

		db.Producer.findOne({
			where: {
				id: 22
			}
		}).then(producer => {

			producer.getFieldGroups().then(fieldGroups => {

				// console.log(fieldGroups[0]);
				done();
				// fieldGroups[0].getProducer().then(producer => {

				// 	console.log(producer.name);
				// 	done();
				// });
			});
		});
  });
});
