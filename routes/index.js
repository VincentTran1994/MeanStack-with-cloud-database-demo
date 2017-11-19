var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', (req, res) => {
    //need to fixit later
    // res.sendFile(path.join(__dirname + 'aa/../dist/index.html'));
    res.send("index page");
} );

module.exports = router;
