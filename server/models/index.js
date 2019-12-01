'use strict';

var conf = require('../config.js')
var dbName = require('../../databaseName')

var Sequelize = require('sequelize');

var db = {};

var DBInfo = {
    username: "root",
    password: conf.db_pwd,   // <----------------- Your Password here
    database: dbName.dbName,
    host: "127.0.0.1",
    dialect: "mysql",
};

var sequelize = new Sequelize(DBInfo.database, DBInfo.username, DBInfo.password, {
    host: DBInfo.host,
    dialect: DBInfo.dialect,
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//=========================================================================================================//
db.addresses = require('./addresses.js')(sequelize, Sequelize)
db.diary = require('./diary.js')(sequelize, Sequelize)
db.diary_events = require('./diary_events.js')(sequelize, Sequelize)
db.diary_kws = require('./diary_kws.js')(sequelize, Sequelize)
db.diary_persons = require('./diary_persons.js')(sequelize, Sequelize)
db.diary_self = require('./diary_self.js')(sequelize, Sequelize)
db.emails = require('./emails.js')(sequelize, Sequelize)
db.events = require('./events.js')(sequelize, Sequelize)
db.kws = require('./kws.js')(sequelize, Sequelize)
db.person_addrs = require('./person_addrs.js')(sequelize, Sequelize)
db.person_emails = require('./person_emails.js')(sequelize, Sequelize)
db.person_phones = require('./person_phones.js')(sequelize, Sequelize)
db.person_socialMedias = require('./person_socialMedias.js')(sequelize, Sequelize)
db.persons = require('./persons.js')(sequelize, Sequelize)
db.phones = require('./phones.js')(sequelize, Sequelize)
db.self = require('./self.js')(sequelize, Sequelize)
db.socialMedias = require('./socialMedias.js')(sequelize, Sequelize)
db.users = require('./users.js')(sequelize, Sequelize)
db.users_diary = require('./users_diary.js')(sequelize, Sequelize)
//=========================================================================================================//
db.addresses.hasMany(db.person_addrs, { onDelete: 'CASCADE', hooks: true })
db.person_addrs.belongsTo(db.addresses)

db.diary.hasMany(db.diary_events, { onDelete: 'CASCADE', hooks: true })
db.diary_events.belongsTo(db.diary)

db.diary.hasMany(db.diary_self, { onDelete: 'CASCADE', hooks: true })
db.diary_self.belongsTo(db.diary)

db.diary.hasMany(db.diary_kws, { onDelete: 'CASCADE', hooks: true })
db.diary_kws.belongsTo(db.diary)

db.diary.hasMany(db.users_diary, { onDelete: 'CASCADE', hooks: true })
db.users_diary.belongsTo(db.diary)

db.diary.hasMany(db.diary_persons, { onDelete: 'CASCADE', hooks: true })
db.diary_persons.belongsTo(db.diary)

db.emails.hasMany(db.person_emails, { onDelete: 'CASCADE', hooks: true })
db.person_emails.belongsTo(db.emails)

db.events.hasMany(db.diary_events, { onDelete: 'CASCADE', hooks: true })
db.diary_events.belongsTo(db.events)

db.kws.hasMany(db.diary_kws, { onDelete: 'CASCADE', hooks: true })
db.diary_kws.belongsTo(db.kws)

db.persons.hasMany(db.diary_persons, { onDelete: 'CASCADE', hooks: true })
db.diary_persons.belongsTo(db.persons)

db.persons.hasMany(db.person_socialMedias, { onDelete: 'CASCADE', hooks: true })
db.person_socialMedias.belongsTo(db.persons)

db.persons.hasMany(db.person_emails, { onDelete: 'CASCADE', hooks: true })
db.person_emails.belongsTo(db.persons)

db.persons.hasMany(db.person_addrs, { onDelete: 'CASCADE', hooks: true })
db.person_addrs.belongsTo(db.persons)

db.persons.hasMany(db.person_phones, { onDelete: 'CASCADE', hooks: true })
db.person_phones.belongsTo(db.persons)

db.phones.hasMany(db.person_phones, { onDelete: 'CASCADE', hooks: true })
db.person_phones.belongsTo(db.phones)

db.self.hasMany(db.diary_self, { onDelete: 'CASCADE', hooks: true })
db.diary_self.belongsTo(db.self)

db.socialMedias.hasMany(db.person_socialMedias, { onDelete: 'CASCADE', hooks: true })
db.person_socialMedias.belongsTo(db.socialMedias)

db.users.hasMany(db.users_diary, { onDelete: 'CASCADE', hooks: true })
db.users_diary.belongsTo(db.users)
//********************************************************

module.exports = db;