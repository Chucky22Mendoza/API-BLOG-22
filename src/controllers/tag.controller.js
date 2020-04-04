const Tag = require('../models/Tag');

const tagController = {};

tagController.getTags = async (req, res) => {
    try {
        const data = await Tag.find();

        res.json({success: true, data});
    } catch (error) {
        res.json({error: error});
    }
}

tagController.getTag = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Tag.findById(id);
        res.json({success: true, data});
    } catch (error) {
        res.json({error: error});
    }
}

tagController.createNewTag = async (req, res) => {
    try {
        const data = await new Tag(req.body).save();
        res.json({success: true, data});
    } catch (error) {
        res.json({error: error});
    }
}

tagController.updateTag = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Tag.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.json({success: true, data});
    } catch (error) {
        res.json({error: error});
    }
}

tagController.deleteTag = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Tag.findByIdAndDelete(id);
        res.json({success: true, data});
    } catch (error) {
        res.json({error: error});
    }
}

module.exports = tagController;