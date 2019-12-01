module.exports = function (sequelize, Sequelize) {
    const kws = sequelize.define("Kws", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        word: {
            type: Sequelize.STRING,
            validate: { notEmpty: true, }
        },
    });

    return kws;
}