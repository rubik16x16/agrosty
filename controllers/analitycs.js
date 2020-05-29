const db = require("../models");

exports.index = (req, res) => {

	db.Analytic.findAll().then(analytics => {

		return res.json(analytics);
	});
};

exports.store = (req, res) => {

	db.Analytic.create(req.body).then(analytic => {

		return res.json(analytic);
	});
};

exports.view = (req, res) => {

	db.Analytic.findByPk(req.params.id).then(analytic => {

		return res.json(analytic);
	});
}

exports.update = (req, res) => {

	db.Analytic.findByPk(req.params.id).then(analytic => {

    analytic.date = req.body.date;
		analytic.cdIndex = req.body.cdIndex;
		analytic.value = req.body.value;
		analytic.fieldId = req.body.fieldId;

    analytic.save().then(result => {

      return res.json(result);
    });
  });
};

exports.delete = (req, res) => {

	db.Analytic.findByPk(req.params.id).then(analytic => {

    analytic.destroy().then(result => {

      res.sendStatus(204);
    });
  });
};
