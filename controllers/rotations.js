const db = require("../models");

exports.index = (req, res) => {

	db.Rotation.findAll().then(rotations => {

		return res.json(rotations);
	});
};

exports.store = (req, res) => {

	db.Rotation.create(req.body).then(rotation => {

		return res.json(rotation);
	});
};

exports.view = (req, res) => {

	db.Rotation.findByPk(req.params.id).then(rotation => {

		return res.json(rotation);
	});
}

exports.update = (req, res) => {

	db.Rotation.findByPk(req.params.id).then(rotation => {

    rotation.name = req.body.name;
		rotation.sinceDt = req.body.sinceDt;
		rotation.untilDt = req.body.untilDt;

    rotation.save().then(result => {

      return res.json(result);
    });
  });
};

exports.delete = (req, res) => {

	db.Rotation.findByPk(req.params.id).then(rotation => {

    rotation.destroy().then(result => {

      res.sendStatus(204);
    });
  });
};
