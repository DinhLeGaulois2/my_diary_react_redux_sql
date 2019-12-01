module.exports = function (sequelize, Sequelize) {
    const socialmedias = sequelize.define("SocialMedias", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        mediaName: {
            type: Sequelize.STRING,
            validate: { notEmpty: true, }
        },
        personName: { type: Sequelize.STRING, },
        pseudo: { type: Sequelize.STRING, },
    });

    return socialmedias;
}