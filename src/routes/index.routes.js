const { Router } = require('express');
const { renderIndex } = require('../controllers/index.controllers');

const router = Router();

//ROUTES
router.get('/', renderIndex)

module.exports = router;