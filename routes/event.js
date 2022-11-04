var express = require('express');
var router = express.Router();

class event {
constructor(event_Name, event_id, event_type){
  this.event_Name=event_Name;
  this.event_id=event_id;
  this.event_type=event_type;
}
}
/* GET home page. */
router.get('/', function(req, res, next) {
  let N1=new event('Oscar',1000,'Awards');
  let S2=new event('MTV',2000,'Rampwalk');
  let E1=new event('HBO',3000,'MovieLaunch');

  res.render('event', { title: 'Search Results event',event : [N1,S2,E1] });
});


module.exports = router;
