var express = require('express');
const event_controlers = require('../controllers/event');
var router = express.Router();
/* GET events */
router.get('/', event_controlers.event_view_all_Page);
module.exports = router;