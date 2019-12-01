const bcrypt = require('bcryptjs');
const Promise = require("bluebird");

module.exports = function (sequelize, Sequelize) {
    var users = sequelize.define("Users", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        loginId: {
            type: Sequelize.UUID,
            validate: { notEmpty: true, }
        },
    })

    // new version: V4
    users.prototype.validatePwd = function (candidatePwd, cb) {
        bcrypt.compare(candidatePwd, this.password, function (err, isMatch) {
            if (err) cb(err)
            if (isMatch)
                return cb(null, this)
            else
                return cb(null, false)
        })
    }

    users.beforeCreate(function (model, options) {
        SALT_WORK_FACTOR = 12;
        return new Promise(function (resolve, reject) {
            bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
                if (err) return reject(err);
                bcrypt.hash(model.password, salt, function (err, hash) {
                    if (err) return cb(err);
                    model.password = hash;
                    return resolve(model, options);
                })
            });
        })
    })

    return users;
}