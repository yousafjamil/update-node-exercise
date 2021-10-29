let express = require('express'),
    singleRoute = require('./title.routes'),
    router = express.Router();
router.use('/i',singleRoute);

module.exports = router;