var sequelize = require('sequelize');
//inisialisasi
var objSequelize = new sequelize(
    {
        database: 'angular_training',
        username: 'root',
        password: '',
        dialect: 'mysql',
        // host: '',
        // post: '',
    }
);

objSequelize.authenticate()
    .then(()=>{console.log('connection established')})
    .catch(()=>{console.log('connection failed')})

module.exports = objSequelize;