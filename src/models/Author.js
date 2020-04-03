const { model, Schema } = require('mongoose');

const authorSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    nickname: {
        type: String
    },
    github: {
        type: String
    },
    twitter: {
        type: String
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String
    },
}, {
    timestamps: true
});

module.exports = model('Author', authorSchema);