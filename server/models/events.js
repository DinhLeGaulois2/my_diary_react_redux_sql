module.exports = function (sequelize, Sequelize) {
    const events = sequelize.define("Events", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            validate: { notEmpty: true, }
        },
        context: { type: Sequelize.STRING(500), },
        place: { type: Sequelize.STRING(500), },
        organizedBy: { type: Sequelize.STRING(500), },
    });

    return events;
}