var express = require('express');
const Event_controlers = require('../controllers/Event');
var router = express.Router();
/* GET events */
router.get('/', Event_controlers.Event_view_all_Page);
/* GET detail costume page */
router.get('/detail', Event_controlers.Event_view_one_Page);

/* GET home page. */
/*router.get('/', Event_controlers.watch_view_all_Page);*/
/* GET detail watch page */
/*router.get('/detail', watch_controlers.watch_view_one_Page);*/


// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

 /* GET update costume page */ 
router.get('/update', secured,    
Event_controlers.Event_update_Page); 

/* GET create costume page */
router.get('/create', secured, Event_controlers.Event_create_Page);

/* GET delete costume page */
router.get('/delete', secured, Event_controlers.Event_delete_Page);

 


module.exports = router;


