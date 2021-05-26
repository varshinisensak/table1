// var sequelize = require('sequelize')

// const connection = new sequelize('Student', 'root', 'Varshini1998@', {
//     host: 'localhost',
//     dialect: 'mysql'
// });
// const Article = connection.define('article', {
//     title: sequelize.STRING,
//     body: sequelize.TEXT,
//     dept: sequelize.TEXT,
//     approved: {
//         type: sequelize.BOOLEAN,
//         defaultValue: false
//     }
// })
// connection
//     .sync({
//         force: true
//     })
//     .then(function () {
//         Article.bulkCreate([
//             {
//                 index: '1',
//                 title: 'Article 1',
//                 body: 'varshini',
//                 dept: 'IT'
//             },
//             {
//                 index: '2',
//                 title: 'Article 2',
//                 body: 'surya',
//                 dept: 'MECH'
//             },
//             {
//                 index: '3',
//                 title: 'Article 3',
//                 body: 'guru',
//                 dept: "CSE"
//             },
//             {
//                 index: '4',
//                 title: 'Article 4',
//                 body: 'vaishu',
//                 dept: 'IT'
//             },
//             {
//                 index: '5',
//                 title: 'Article 5',
//                 body: 'kabii',
//                 dept: 'EEE'
//             },
//             {
//                 index: '6',
//                 title: 'Article 6',
//                 body: 'shrii',
//                 dept: 'AERO'
//             }
//         ], {
//             validate: true,
//             ignoreDuplicate: true
//         }).then(function () {

//         })
//     })


// var sequelize = require('sequelize');
// var fs = require("fs");
// var app = new sequelize('Student', 'root', 'Varshini1998@', {
//     host: 'localhost',
//     dialect: 'mysql'
// });
// // const users = app.define('users', {
// //     name: sequelize.STRING,
// //     password: sequelize.STRING,
// //     profession: sequelize.STRING,

// // })
// // const findByIdAndDelete = async (req, res) => {
// //     const users = await sequelize.users.destroy({
// //         where: {
// //             id: req.params.id
// //         }
// //     })
// //     res.json(users)
// // }
// fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
//     data = JSON.parse(data);
//     delete data["user" + 4];
//     console.log(data);
//     // res.end(JSON.stringify(data));
// });


// // var server = app.listen(8081, function () {
// //     var host = server.address().address
// //     var port = server.address().port
// //     console.log("Example app listening at http://%s:%s", host, port)
// // })
// // export default {
// //     findByIdAndDelete
// // }


// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// const db = new Sequelize('worker', 'root', 'Varshini1998@', {
//     host: 'localhost',
//     dialect: 'mysql'
// });
// const User = db.define('User', {
//     // Model attributes are defined here
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     lastName: {
//         type: DataTypes.STRING
//         // allowNull defaults to true
//     },
//     address: {
//         type: DataTypes.STRING
//     },
//     age: {
//         type: DataTypes.INTEGER
//     }
// }, {
//     // Other model options go here
// });

// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
// db.sync({
//     force: true
// })
//     .then(() => {
//         const jane = User.bulkCreate([
//             {
//                 firstName: "VARSHINI",
//                 lastName: "SENTHILKUMAR",
//                 address: "TRICHY",
//                 age: 22,
//             }, {
//                 firstName: "SURYA",
//                 lastName: "SELVAM",
//                 address: "PUDHUKOTTAI",
//                 age: 23,
//             }])


//     })
//     .catch((err) => console.log(err))

// // db.authenticate()
// //   .then(() => {
// //     console.log('connection success')
// //   })
// module.exports - {
//     db
// }

// var sequelize = require('sequelize')
// var DataTypes = require('sequelize')
// const connection = new sequelize('db', 'root', 'Varshini1998@', {
//     host: 'localhost',
//     dialect: 'mysql'
// });
// var Friend = connection.define('Friend', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     userId_1: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     userId_2: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     }
// })
// var User = connection.define('User', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// })

// Friend.belongsTo(User, { as: 'user_1', foreignKey: 'userId_1', constraints: false });
// Friend.belongsTo(User, { as: 'user_2', foreignKey: 'userId_2', constraints: false });

// user.js (User Model definition)


// exports = (sequelize, dataTypes) => {
//     const { STRING } = dataTypes
//     const connection = new sequelize('SV', 'root', 'Varshini1998@', {
//         host: 'localhost',
//         dialect: 'mysql'
//     });
//     const User = connection.define("user", {
//         username: { type: STRING }
//     })

//     User.associate = models => {
//         User.hasOne(models.Portfolio, { foreignKey: "userId" }) // If only one portfolio per user

//     }

//     return User
// }

// // portfolio.js (Portfolio Model definition)
// module.exports = (sequelize, dataTypes) => {
//     const { STRING } = dataTypes
//     const Portfolio = sequelize.define("portfolio", {
//         portfolioName: { type: STRING }
//     })

//     Portfolio.associate = models => {
//         Portfolio.belongsTo(models.User, { foreignKey: "userId" })
//     }

//     return Portfolio
// }

const sequelize = require("sequelize");

const db = require("./models");
const PORT = process.env.PORT || 3000;
app.use(sequelize.urlencoded({ extended: true }));
app.use(sequelize.json());
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('listening at:http://localhost:$(PORT)');
    });
});