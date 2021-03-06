module.exports = function (sequelize, Sequelize) {
    const diary_persons = sequelize.define("Diary_persons", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        content: {
            type: Sequelize.STRING(2000),
            validate: { notEmpty: true, }
        },
    });

    return diary_persons;
}