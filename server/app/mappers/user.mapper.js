'use strict';

/**
 * This module works as a DTO from service to client.
 * It represents a user REST resource.
 * 
 * Build the user data by adding or deleting some properties.
 * This is better than exposing the model directly since we build
 * the response manually. We do not let sensitive data to be sent
 * (i.e password and salt)
 * @param userModel the JSON string representing a user model
 */
var userDTO = function () {
	function build(userModel, additional) {
		var result = {
			id: userModel.id,
			username: userModel.username,
			email: userModel.email,
			createdAt: userModel.createdAt,
			roleId: userModel.roleId
		}
		return result;
	}

	function buildList(userModel) {
		var list = [];
		var rows = userModel.rows;

		for (var i = 0; i < rows.length; i++) {
			var builtUser = build(rows[i]);
			list.push(builtUser);
		}
		return {
			"users": list,
			"pagination": {
				"offset": userModel.offset,
				"page": Math.ceil(userModel.offset / userModel.limit),
				"limit": userModel.limit,
				"count": userModel.count
			}
		};
	}

	return {
		build: build,
		buildList: buildList,
	};
};

module.exports = userDTO;
