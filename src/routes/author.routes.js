const { Router } = require('express');
const {
    getAuthors,
    createNewAuthor,
    getAuthor,
    deleteAuthor,
    updateAuthor
} = require('../controllers/author.controller');

const router = Router();

//ROUTES
router.get('/', getAuthors);
router.get('/:id', getAuthor);
router.post('/', createNewAuthor);
router.put('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);

module.exports = router;