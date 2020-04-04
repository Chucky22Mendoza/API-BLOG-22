const { Router } = require('express');
const {
    getTag,
    getTags,
    createNewTag,
    deleteTag,
    updateTag
} = require('../controllers/tag.controller');

const router = Router();

//ROUTES
router.get('/', getTags);
router.get('/:id', getTag);
router.post('/', createNewTag);
router.put('/:id', updateTag);
router.delete('/:id', deleteTag);

module.exports = router;