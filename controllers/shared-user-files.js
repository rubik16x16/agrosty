const db = require("../models");

exports.index = (req, res) => {

	db.SharedUserFile.findAll().then(sharedUserFiles => {

		return res.json(sharedUserFiles);
	});
};

exports.store = (req, res) => {

	db.SharedUserFile.create(req.body).then(sharedUserFile => {

		return res.json(sharedUserFile);
	});
};

exports.view = (req, res) => {

	db.SharedUserFile.findByPk(req.params.id).then(sharedUserFile => {

		return res.json(sharedUserFile);
	});
}

exports.update = (req, res) => {

	db.SharedUserFile.findByPk(req.params.id).then(sharedUserFile => {

    sharedUserFile.accessType = req.body.accessType;
		sharedUserFile.accessGrantedDt = req.body.accessGrantedDt;
		sharedUserFile.userId = req.body.userId;
		sharedUserFile.fiedId = req.body.fiedId;

    sharedUserFile.save().then(result => {

      return res.json(result);
    });
  });
};

exports.delete = (req, res) => {

	db.SharedUserFile.findByPk(req.params.id).then(sharedUserFile => {

    sharedUserFile.destroy().then(result => {

      res.sendStatus(204);
    });
  });
};
