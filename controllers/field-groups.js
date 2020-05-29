const db = require("../models");

exports.index = (req, res) => {

	db.Producer.findByPk(req.params.producerId).then(producer => {

		producer.getFieldGroups().then(fieldGroups => {

			return res.json(fieldGroups);
		});
	});
};

exports.store = (req, res) => {

	db.Producer.findByPk(req.params.producerId).then(producer => {

		db.FieldGroup.create({
			...req.body,
			producerId: producer.id
		}).then(fieldGroup => {

			return res.json(fieldGroup);
		});
	});
};

exports.view = (req, res) => {

	db.FieldGroup.findByPk(req.params.id).then(fieldGroup => {

		return res.json(fieldGroup);
	});
}

exports.update = (req, res) => {

	db.FieldGroup.findByPk(req.params.id).then(fieldGroup => {

		fieldGroup.name = req.body.name;

		fieldGroup.save().then(result => {

      return res.json(result);
    });
	});
};

exports.delete = (req, res) => {

	db.FieldGroup.findByPk(req.params.id).then(fieldGroup => {

    fieldGroup.destroy().then(result => {

      return res.sendStatus(204);
    });
  });
};
