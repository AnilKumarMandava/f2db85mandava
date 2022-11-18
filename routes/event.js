var express = require('express');
const Event_controlers = require('../controllers/Event');
var router = express.Router();
/* GET events */
router.get('/', Event_controlers.Event_view_all_Page);
/* GET detail costume page */
router.get('/detail', Event_controlers.Event_view_one_Page);
/* GET create costume page */
router.get('/create', Event_controlers.Event_create_Page);
/* GET create update page */
router.get('/update', Event_controlers.Event_update_Page);
/* GET delete costume page */
router.get('/delete', Event_controlers.Event_delete_Page);
router.get('/:id', Event_controlers.Event_detail);
router.put('/:id',Event_controlers.Event_update_put);
/* GET home page. */
/*router.get('/', Event_controlers.watch_view_all_Page);*/
/* GET detail watch page */
/*router.get('/detail', watch_controlers.watch_view_one_Page);*/


module.exports = router;


