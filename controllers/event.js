var Event = require('../models/event');
// List of all Event
exports.event_list = async function (req, res) {
    try {
        theEvents = await Event.find();
        res.send(theEvents);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Event.
exports.event_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Event detail: ' + req.params.id);
};
// Handle Event create on POST.
exports.event_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Event();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"event_type":"ghost", "cost":12, "size":"large"}
    document.eventname = req.body.eventname;
    document.eventid = req.body.eventid;
    document.eventtype = req.body.eventtype;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Event delete form on DELETE.
exports.event_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Event delete DELETE ' + req.params.id);
};
// Handle Film update form on PUT.
exports.event_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: event update PUT' + req.params.id);
};
exports.event_view_all_Page = async function (req, res) {
    try {
        theEvent = await Event.find();
        res.render('event', { title: 'Event Search Results', results: theEvents });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};