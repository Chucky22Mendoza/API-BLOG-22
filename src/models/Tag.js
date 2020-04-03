const { model, Schema } = require('mongoose');

const tagSchema = new Schema({
    nametag:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Tag', tagSchema);