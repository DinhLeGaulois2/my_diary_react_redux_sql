module.exports = function (sequelize, Sequelize) {
    const phones = sequelize.define("Phones", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        number: {
            type: Sequelize.STRING,
            validate: { notEmpty: true, }
        },
    });

    return phones;
}