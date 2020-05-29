const db = require("../models");

exports.index = (req, res) => {

	db.UserLog.findAll().then(userLogs => {

		return res.json(userLogs);
	});
};

exports.store = (req, res) => {

	db.UserLog.create(req.body).then(userLogs => {

		return res.json(userLogs);
	});
};

exports.view = (req, res) => {

	db.UserLog.findByPk(req.params.id).then(userLogs => {

		return res.json(userLogs);
	});
}

exports.update = (req, res) => {

	db.UserLog.findByPk(req.params.id).then(userLogs => {

    userLogs.date = req.body.date;
		userLogs.type = req.body.type;
		userLogs.content = req.body.content;
		userLogs.userId = req.body.userId;

    userLogs.save().then(result => {

      return res.json(result);
    });
  });
};

exports.delete = (req, res) => {

	db.UserLog.findByPk(req.params.id).then(userLogs => {

    userLogs.destroy().then(result => {

      res.sendStatus(204);
    });
  });
};
