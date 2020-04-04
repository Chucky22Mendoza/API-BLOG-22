const { Router } = require('express');
const {
    getBlog,
    getBlogs,
    createNewBlog,
    deleteBlog,
    updateBlog
} = require('../controllers/blog.controllers');

const router = Router();

//ROUTES
router.get('/', getBlogs);
router.get('/:id', getBlog);
router.post('/', createNewBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;