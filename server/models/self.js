module.exports = function (sequelize, Sequelize) {
    const self = sequelize.define("Self", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        domain: { type: Sequelize.STRING, },
    });

    return self;
}