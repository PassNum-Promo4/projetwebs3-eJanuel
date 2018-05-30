const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    eMail: String,
    birthDate: String
})

module.exports = mongoose.model('user', userSchema, 'users')