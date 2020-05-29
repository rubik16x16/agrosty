const db = require("../models");

exports.index = (req, res) => {

	db.FieldRotation.findAll().then(fieldRotations => {

		return res.json(fieldRotations);
	});
};

exports.store = (req, res) => {

	db.FieldRotation.create(req.body).then(fieldRotation => {

		return res.json(fieldRotation);
	});
};

exports.view = (req, res) => {

	db.FieldRotation.findByPk(req.params.id).then(fieldRotation => {

		return res.json(fieldRotation);
	});
}

exports.update = (req, res) => {

	db.FieldRotation.findByPk(req.params.id).then(fieldRotation => {

    fieldRotation.cpCrop = req.body.cpCrop;
		fieldRotation.hybrid = req.body.hybrid;
		fieldRotation.sowingDt = req.body.sowingDt;
		fieldRotation.phenologicStage = req.body.phenologicStage;
		fieldRotation.fieldId = req.body.fieldId;
		fieldRotation.rotationId = req.body.rotationId;

    fieldRotation.save().then(result => {

      return res.json(result);
    });
  });
};

exports.delete = (req, res) => {

	db.FieldRotation.findByPk(req.params.id).then(fieldRotation => {

    producer.destroy().then(result => {

      res.sendStatus(204);
    });
  });
};
