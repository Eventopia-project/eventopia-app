const { DataTypes } = require( 'sequelize');

const { connection } =require('../../database/index');

const Event = connection.define('event',{
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    date_event: {
        type: DataTypes.DATE
    },
    Location: {
        type: DataTypes.STRING
    },


},{
    timestamps: false
})
module.exports = Event;