const sequelize = require('../db')
const {DataTypes} = require ('sequelize')

// Модель "Пользователь"
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    login: {type:DataTypes.STRING, unique:true, allowNull:false},
    password: {type:DataTypes.STRING, allowNull:false},
    role: {type:DataTypes.STRING, defaultValue:"USER"},
    depId: {type:DataTypes.INTEGER, allowNull:false},
})

// Модель "Заявка"
const Request = sequelize.define('req', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    creator: {type:DataTypes.INTEGER, allowNull:false},
    manager: {type:DataTypes.INTEGER, allowNull:false},
    status:{type:DataTypes.STRING, defaultValue:"in progress"},
    theme: {type:DataTypes.TEXT, allowNull:false},
    description: {type:DataTypes.TEXT, allowNull:false},
})
module.exports = {
    User,
    Request,
}