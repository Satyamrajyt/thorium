const express = require('express');
const underscore = require('underscore')
const router = express.Router();

const logger = require('../logger/logger')
const helper = require('../util/helper')
const formatter = require('../validator/formatter')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;