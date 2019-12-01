module.exports = function (sequelize, Sequelize) {
    const addresses = sequelize.define("Addresses", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        address: {
            type: Sequelize.STRING,
            validate: { notEmpty: true, }
        },
    });

    return addresses;
}