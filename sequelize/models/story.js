'use strict';
module.exports = (sequelize, DataTypes) => {
    let Story = sequelize.define('Story', {
        externalUserId: DataTypes.STRING,
        data: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    }, {});
    return Story;
};