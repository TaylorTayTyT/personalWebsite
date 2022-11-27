const mongoose = require('mongoose')

const Profile = new mongoose.Schema({
    First: {type: String, trim: true, default: ''}
}
)

module.exports = mongoose.model('Profile', Profile)