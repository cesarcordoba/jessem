var fs = require('fs');
var mysql = require('mysql');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('jessem', 'cesar', '1234', {
    host: '35.238.229.92',
    dialect: 'mysql',
    port: '3306',
    pool: {
        min: 10,
        max: 300,
        idle: 30000,
    }
});
// var sequelize = new Sequelize('jessem', 'jessem', '#1q2w3e4r', {
//     host: 'jessem.database.windows.net',
//     dialect: 'mssql',
//     port: '1433',
//     logging : false,
//     pool: {
//         min: 10,
//         max: 300,
//         idle: 30000,
//     },
//     dialectOptions: {
//         requestTimeout : 30000,
//         encrypt: true,
//         ssl: {
//             ca: fs.readFileSync('ssl.crt.pem')
//         }
//     }
// })
//
// sequelize.authenticate().complete(function(err) {
//     if (err) {
//         console.log('Unable to connect to the database:', err);
//     } else {
//         console.log('Connection has been established successfully.');
//     }
// })

sequelize.sync()
.then(() =>  console.log('Connecion realizada'))
.catch(err =>  console.log('No se puede conectar a la bd:', err))


module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;
