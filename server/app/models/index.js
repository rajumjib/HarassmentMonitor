
var models = [
	{
		name: "User",
		file: "User"
	},
	/*
	{
		name: "UserToken",
		file: "UserToken"
	},
	{
		name: "Role",
		file: "Role"
	},
	{
		name: "Permission",
		file: "Permission"
	}
	*/
];

module.exports = function (db) {

	var items = {};
	models.forEach(function (item) {
		items[item.name] = db.import(__dirname + '/' + item.file);
	});

	(function (context, db) {
		// describe relationships
		//context.User.belongsTo(context.Role);
		//context.Role.hasMany(context.Permission, { onDelete: 'cascade' });
		//context.Permission.hasMany(context.Role, { onDelete: 'cascade' });
		//context.UserToken.belongsTo(context.User);

		db.context = context;
	})(items, db);
};





