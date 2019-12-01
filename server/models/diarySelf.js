module.exports = function (sequelize, Sequelize) {
    const diarySelf = sequelize.define("DiarySelf", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        note: { type: Sequelize.STRING, },
        content: {
            type: Sequelize.STRING(2000),
            validate: { notEmpty: true, }
        },
    });

    return diarySelf;
}