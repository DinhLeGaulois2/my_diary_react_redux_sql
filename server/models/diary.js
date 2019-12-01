module.exports = function (sequelize, Sequelize) {
    const diary = sequelize.define("Diary", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
    });

    return diary;
}