const Sequelize = require('sequelize');
const db = require('../db');
const Team = require('../team/model')
const Player = require('../player/model')

const City = db.define('city',{
    name:{
        type: Sequelize.STRING,
        field: 'city_name'
    },
    population:{
        type: Sequelize.INTEGER,
        field: 'city_population'
    }
},
    { tableName: 'city' }
);

City.belongsTo(Team);
City.belongsTo(Player);


module.exports = City;
