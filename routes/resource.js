var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Event_controller = require('../controllers/Event');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// EVENT ROUTES ///
// POST request for creating a Event.
router.post('/Events', Event_controller.Event_create_post);
// DELETE request to delete Event.
router.delete('/Events/:id', Event_controller.Event_delete);
// PUT request to update Event.
router.put('/Events/:id', Event_controller.Event_update_put);
// GET request for one Event.
router.get('/Events/:id', Event_controller.Event_detail);
// GET request for list of all Event items.
router.get('/Events', Event_controller.Event_list);
module.exports = router;