module.exports = function (sequelize, Sequelize) {
    const bookmarks = sequelize.define("Bookmarks", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            validate: { notEmpty: true, }
        },
    });

    return bookmarks;
}