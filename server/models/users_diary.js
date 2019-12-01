module.exports = function (sequelize, Sequelize) {
    const users_diary = sequelize.define("Users_diary", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
    });

    return users_diary;
}