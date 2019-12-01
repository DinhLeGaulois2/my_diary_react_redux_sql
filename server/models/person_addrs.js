module.exports = function (sequelize, Sequelize) {
    const person_addrs = sequelize.define("Person_addrs", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        comment: { type: Sequelize.STRING(500) },
    });

    return person_addrs;
}