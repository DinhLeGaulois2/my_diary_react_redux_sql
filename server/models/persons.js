module.exports = function (sequelize, Sequelize) {
    const persons = sequelize.define("Persons", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        fName: {
            type: Sequelize.STRING,
            validate: { notEmpty: true, }
        },
        mName: { type: Sequelize.STRING, },
        lName: { type: Sequelize.STRING, },
    });

    return persons;
}