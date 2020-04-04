const Blog = require('../models/Blog');

const blogController = {};

blogController.getBlogs = async (req, res) => {
    try {
        const data = await Blog.find();

        res.json({success: true, data});
    } catch (error) {
        res.json({error: error});
    }
}

blogController.getBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Blog.findById(id);
        res.json({success: true, data});
    } catch (error) {
        res.json({error: error});
    }
}

blogController.createNewBlog = async (req, res) => {
    try {
        const data = await new Blog(req.body).save();
        res.json({success: true, data});
    } catch (error) {
        res.json({error: error});
    }
}

blogController.updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Blog.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.json({success: true, data});
    } catch (error) {
        res.json({error: error});
    }
}

blogController.deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Blog.findByIdAndDelete(id);
        res.json({success: true, data});
    } catch (error) {
        res.json({error: error});
    }
}

module.exports = blogController;