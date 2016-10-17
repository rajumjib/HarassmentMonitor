
var app = null;

module.exports.init = function (refApp) {
    app = refApp;
};

module.exports.getFactory = function () {

    var factory = {
        getUser: function () {
            return app.get("models").User;
        },

        getRole: function () {
            return app.get("models").Role;
        },
    };

    return factory;
};
