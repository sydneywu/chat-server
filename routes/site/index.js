let express = require('express');
let router = express.Router();
let story = require('./story');

router.use('/story', story);

module.exports = router;
