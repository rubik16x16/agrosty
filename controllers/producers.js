const db = require("../models");

exports.index = (req, res) => {

	db.Producer.findAll().then(producers => {

		return res.json(producers);
	});
};

exports.store = (req, res) => {

	db.Producer.create(req.body).then(producer => {

		return res.json(producer);
	});
};

exports.view = (req, res) => {

	db.Producer.findByPk(req.params.id).then(producer => {

		return res.json(producer);
	});
}

exports.update = (req, res) => {

	db.Producer.findByPk(req.params.id).then(producer => {

    producer.name = req.body.name;

    producer.save().then(result => {

      return res.json(result);
    });
  });
};

exports.delete = (req, res) => {

	db.Producer.findByPk(req.params.id).then(producer => {

    producer.destroy().then(result => {

      res.sendStatus(204);
    });
  });
};
