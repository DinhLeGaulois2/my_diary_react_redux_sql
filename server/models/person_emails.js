module.exports = function (sequelize, Sequelize) {
    const person_emails = sequelize.define("Person_emails", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        comment: { type: Sequelize.STRING(500), },
    });

    return person_emails;
}