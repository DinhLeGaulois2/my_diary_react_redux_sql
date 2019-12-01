module.exports = function (sequelize, Sequelize) {
    const person_socialmedias = sequelize.define("Person_socialMedias", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        comment: { type: Sequelize.STRING(500), },
    });

    return person_socialmedias;
}