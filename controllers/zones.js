const db = require("../models");

exports.index = (req, res) => {

	db.Zone.findAll().then(zones => {

		return res.json(zones);
	});
};

exports.store = (req, res) => {

	db.Zone.create(req.body).then(zone => {

		return res.json(zone);
	});
};

exports.view = (req, res) => {

	db.Zone.findByPk(req.params.id).then(zone => {

		return res.json(zone);
	});
}

exports.update = (req, res) => {

	db.Zone.findByPk(req.params.id).then(zone => {

    zone.sinceIndexValue = req.body.sinceIndexValue;
		zone.untilIndexValue = req.body.untilIndexValue;
		zone.color = req.body.color;
		zone.area = req.body.area;
		zone.zoningId = req.body.zoningId;
		zone.fieldId = req.body.fieldId;
		zone.rotationId = req.body.rotationId;

    zone.save().then(result => {

      return res.json(result);
    });
  });
};

exports.delete = (req, res) => {

	db.Zone.findByPk(req.params.id).then(zone => {

    zone.destroy().then(result => {

      res.sendStatus(204);
    });
  });
};
