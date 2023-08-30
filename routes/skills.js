const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills')

router.get('/', skillsCtrl.index);

router.get('/', skillsCtrl.show);

module.exports = router;