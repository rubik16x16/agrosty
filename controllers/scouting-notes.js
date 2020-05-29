const db = require("../models");

exports.index = (req, res) => {

	db.ScoutingNote.findAll().then(scoutingNotes => {

		return res.json(scoutingNotes);
	});
};

exports.store = (req, res) => {

	db.ScoutingNote.create(req.body).then(scoutingNote => {

		return res.json(scoutingNote);
	});
};

exports.view = (req, res) => {

	db.ScoutingNote.findByPk(req.params.id).then(scoutingNote => {

		return res.json(scoutingNote);
	});
}

exports.update = (req, res) => {

	db.ScoutingNote.findByPk(req.params.id).then(scoutingNote => {

    scoutingNote.date = req.body.date;
		scoutingNote.position = req.body.position;
		scoutingNote.description = req.body.description;
		scoutingNote.photo = req.body.photo;
		scoutingNote.userId = req.body.userId;
		scoutingNote.fieldId = req.body.fieldId;
		scoutingNote.rotationId = req.body.rotationId;

    scoutingNote.save().then(result => {

      return res.json(result);
    });
  });
};

exports.delete = (req, res) => {

	db.ScoutingNote.findByPk(req.params.id).then(scoutingNote => {

    scoutingNote.destroy().then(result => {

      res.sendStatus(204);
    });
  });
};
