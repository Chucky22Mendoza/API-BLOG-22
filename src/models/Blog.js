const { model, Schema } = require('mongoose');

const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    html_content: {
        type: String,
        required: true
    },
    id_tag: {
        type: String,
        required: true
    },
    id_author: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = model('Blog', blogSchema);