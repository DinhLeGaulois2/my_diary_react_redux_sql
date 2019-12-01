const passport = require('passport');
const models = require('../models') // DB's models
const requireAuth = passport.authenticate('jwt', { session: false });

const db = require("../models");

module.exports = function (app) {
}