module.exports = function (sequelize, Sequelize) {
    const person_phones = sequelize.define("Person_phones", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        comment: { type: Sequelize.STRING(500), },
    });

    return person_phones;
}