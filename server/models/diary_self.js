module.exports = function (sequelize, Sequelize) {
    const diary_self = sequelize.define("Diary_self", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        note: { type: Sequelize.STRING(500), },
        content: { type: Sequelize.STRING(500), },
    });

    return diary_self;
}