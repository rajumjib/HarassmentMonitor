'use strict';

/**
 * Module dependencies.
 */
var dbFactory = require("./db.factory");
var userDependency = dbFactory.getFactory().getUser();


var userRepository = {

    init: function (userModel) {
        userDependency = userModel || dbFactory.getFactory().getUser();
        return this;
    },

    /**
    * Create a user
    */
    addNew: function (newUser, success, error) {
        var user = userDependency.build(newUser);

        /*
        //encrypt password if requested
        if(newUser.password){	
            var user = userDependency.build();
            var encryptedPassword = user.encryptPassword(newUser.password);
            user.setDataValue('password', encryptedPassword);
        }
        */

        user.save()
            .success(success)
            .error(error);
    },

    /**
    * Show the current user
    */
    findById: function (id, success, error) {
        userDependency.find({ where: { id: id } })
            .success(success)
            .error(error);
    },

    /**
    * Update a user
    */
    updateById: function (id, updatedUser, success, error) {

        /*
        //encrypt password if requested
        if(updatedUser.password){	
            var user = userDependency.build();
            var encryptedPassword = user.encryptPassword(updatedUser.password);
            updatedUser.password = encryptedPassword;
        }
        */

        // update(updated entity, where clause)
        userDependency.update(updatedUser, { id: id })
            .success(success)
            .error(error);
    },

    /**
    * Delete a user
    */
    deleteById: function (id, success, error) {
        userDependency.destroy({ id: id })
            .success(success)
            .error(error);
    },

    /**
    * List of Users
    */
    getAll: function (options, success, error) {

        var opts = {};

        if (options.offset) {
            opts.offset = options.offset;
        }

        if (options.limit) {
            opts.limit = options.limit;
        }

        var where = {};

        if (options.userName) {
            where.userName = options.userName;
        }

        opts.where = where;

        userDependency.findAndCountAll(opts)
            .success(success)
            .error(error);
    }
}

module.exports = userRepository;
