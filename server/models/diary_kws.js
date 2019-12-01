module.exports = function (sequelize, Sequelize) {
    const diary_kws = sequelize.define("Diary_kws", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
    });

    return diary_kws;
}