var Sequelize = require('sequelize');
var objSequelize = require('../sequelizeConfig');
const User = objSequelize.define('users',
    {
        id: {type:Sequelize.INTEGER, primaryKey: true},
        name: {type:Sequelize.STRING},
        email: {type:Sequelize.STRING},
        password: {type:Sequelize.STRING},
    },
    {tableName: 'users', timestamps: false}
);

//create table if not exists
User.sync()
    .then(()=>{console.log('create table success')})
    .catch(()=>{console.log('failed...')});

//get all user
exports.getAll = async ()=>{return await User.findAll()}

//get user by parameter
exports.getUser = async (obj)=>{
    return await User.findOne({where: obj});
}

exports.addUser = async (obj)=>{
    return await User.create(obj);
}