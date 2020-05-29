const db = require("../models");

exports.index = (req, res) => {

	db.Image.findAll().then(images => {

		return res.json(images);
	});
};

exports.store = (req, res) => {

	db.Image.create(req.body).then(image => {

		return res.json(image);
	});
};

exports.view = (req, res) => {

	db.Image.findByPk(req.params.id).then(image => {

		return res.json(image);
	});
}

exports.update = (req, res) => {

	db.Image.findByPk(req.params.id).then(image => {

		image.processed_tif_url = req.body.processed_tif_url;
		image.sateliteName = req.body.sateliteName;
		image.acquisitionDt = req.body.acquisitionDt;
		image.cloudCover = req.body.cloudCover;
		image.r = req.body.r;
		image.g = req.body.g;
		image.b = req.body.b;
		image.excludeind = req.body.excludeind;
		image.dumpScreen = req.body.dumpScreen;
		image.histogram = req.body.histogram;

    image.save().then(result => {

      return res.json(result);
    });
  });
};

exports.delete = (req, res) => {

	db.Image.findByPk(req.params.id).then(image => {

    image.destroy().then(result => {

      res.sendStatus(204);
    });
  });
};
