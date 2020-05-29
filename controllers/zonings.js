const db = require("../models");

exports.index = (req, res) => {

	db.Zoning.findAll().then(zonings => {

		return res.json(zonings);
	});
};

exports.store = (req, res) => {

	db.Zoning.create(req.body).then(zoning => {

		return res.json(zoning);
	});
};

exports.view = (req, res) => {

	db.Zoning.findByPk(req.params.id).then(zoning => {

		return res.json(zoning);
	});
}

exports.update = (req, res) => {

	db.Zoning.findByPk(req.params.id).then(zoning => {

    zoning.outputimg = req.body.outputimg;
		zoning.fieldId = req.body.fieldId;
		zoning.rotationId = req.body.rotationId;
		zoning.imageId = req.body.imageId;

    zoning.save().then(result => {

      return res.json(result);
    });
  });
};

exports.delete = (req, res) => {

	db.Zoning.findByPk(req.params.id).then(zoning => {

    producer.destroy().then(result => {

      res.sendStatus(204);
    });
  });
};
