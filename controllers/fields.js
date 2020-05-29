const db = require("../models");

exports.index = (req, res) => {

	db.Field.findAll().then(fields => {

		return res.json(fields);
	});
};

exports.store = (req, res) => {

	db.Field.create(req.body).then(field => {

		return res.json(field);
	});
};

exports.view = (req, res) => {

	db.Field.findByPk(req.params.id).then(field => {

		return res.json(field);
	});
}

exports.update = (req, res) => {

	db.Field.findByPk(req.params.id).then(field => {

		field.name = req.body.name;
		field.boundaries = req.body.boundaries;
		field.status = req.body.status;
		field.progressPct = req.body.progressPct;
		field.area = req.body.area;
		field.avgNDVI = req.body.avgNDVI;
		field.priorAvgNDVI = req.body.priorAvgNDVI;
		field.photo = req.body.photo;
		field.fieldGroupId = req.body.fieldGroupId;
		field.userId = req.body.userId;

    field.save().then(result => {

      return res.json(result);
    });
  });
};

exports.delete = (req, res) => {

	db.Field.findByPk(req.params.id).then(field => {

    field.destroy().then(result => {

      res.sendStatus(204);
    });
  });
};
