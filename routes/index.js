let express = require('express');
let router = express.Router();
let site = require('./site/index.js');

/* GET home page. */

router.use('/api/site/v1/', site);

// Application Error
router.use(function (err, req, res, next) {
    res.status(err.statusCode || 500);
    res.json({
        message: err.message,   // todo:syd do not show err and message for production
        error: err
    });
});


module.exports = router;
