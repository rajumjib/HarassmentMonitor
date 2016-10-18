
var user = {
	controller: {
		location: '../controllers/',
	},
	service: {
		location: '../services/user.service',
	},
	repository: {
		location: '../repositories/user.repository',
	},
}

module.exports = {
	development: {
		user: user
	},
	test: {
		user: user
	},
	production: {
		user: user
	}
};
