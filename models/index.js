const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

// db name, db username, db password

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host : dbConfig.HOST,
        dialect : dbConfig.dialect,
        operatorsAliases : false,
        pool : {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }
);

// authenticate

sequelize.authenticate()
    .then(()=>{console.log('connected...')})
    .catch((e)=>{console.log('error' + e)})

//  initialize db
const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./productModel.js')(sequelize,DataTypes)
db.reviews = require('./reviewModel.js')(sequelize,DataTypes)
db.sequelize.sync({force: false})
.then(()=>{console.log('Yes Re-Sync done..!');})

module.exports = db