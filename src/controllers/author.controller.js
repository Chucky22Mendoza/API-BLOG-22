const Author = require('../models/Author');

const authorController = {};

authorController.getAuthors = async (req, res) => {
    try {
        const data = await Author.find();

        res.json({success: true, data});
    } catch (error) {
        res.json({error: error});
    }
}

authorController.getAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Author.findById(id);
        res.json({success: true, data});
    } catch (error) {
        res.json({error: error});
    }
}

authorController.createNewAuthor = async (req, res) => {
    try {
        const data = await new Author(req.body).save();
        res.json({success: true, data});
    } catch (error) {
        res.json({error: error});
    }
}

authorController.updateAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Author.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.json({success: true, data});
    } catch (error) {
        res.json({error: error});
    }
}

authorController.deleteAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Author.findByIdAndDelete(id);
        res.json({success: true, data});
    } catch (error) {
        res.json({error: error});
    }
}

module.exports = authorController;