var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var event_controller = require('../controllers/event');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// EVENT ROUTES ///
// POST request for creating a Event.
router.post('/events', event_controller.event_create_post);
// DELETE request to delete Event.
router.delete('/event/:id', event_controller.event_delete);
// PUT request to update Event.
router.put('/events/:id', event_controller.event_update_put);
// GET request for one Event.
router.get('/events/:id', event_controller.event_detail);
// GET request for list of all Event items.
router.get('/events', event_controller.event_list);
module.exports = router;