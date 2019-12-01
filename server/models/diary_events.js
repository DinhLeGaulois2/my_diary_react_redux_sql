module.exports = function (sequelize, Sequelize) {
    const diary_events = sequelize.define("Diary_events", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        content: { type: Sequelize.STRING(500), },
    });

    return diary_events;
}