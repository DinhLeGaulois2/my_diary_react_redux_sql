module.exports = function (sequelize, Sequelize) {
    const emails = sequelize.define("Emails", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING,
            validate: { notEmpty: true, }
        },
    });

    return emails;
}