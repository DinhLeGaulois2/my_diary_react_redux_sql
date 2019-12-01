const Sequelize = require('sequelize');
const models = require('../models') // DB's models
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });

const db = require("../models");

module.exports = function (app) {
    app.get("/api/get/diary/all/:userLoginId", requireAuth, (req, res) => {
        db.users.findAll({
            where: { loginId: req.params.userLoginId },
            include: [
                {
                    model: db.users_diary,
                    include: [
                        {
                            model: db.diary,
                            include: [
                                {
                                    model: db.diary_events,
                                    include: [{ model: db.events, attributes: ['id', 'title'] }]
                                },
                                {
                                    model: db.diary_self,
                                    include: [{ model: db.self }]
                                },
                                {
                                    model: db.diary_kws,
                                    include: [{ model: db.kws }]
                                },
                                { model: db.persons }
                            ]
                        }
                    ]
                }
            ]
        })
            .then(userRes => {
                res.status(200).json(userRes)
            }).catch(err => res.status(400).json(err))
    })
}