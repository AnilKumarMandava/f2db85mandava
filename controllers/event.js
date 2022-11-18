var Event = require('../models/Event');
// List of all Event
exports.Event_list = async function (req, res) {
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
exports.Event_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Event.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Event create on POST.
exports.Event_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Event();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"event_type":"ghost", "cost":12, "size":"large"}
    document.Eventname = req.body.Eventname;
    document.Event_id = req.body.Event_id;
    document.Eventtype = req.body.Eventtype;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Event update form on PUT.
exports.Event_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Event.findById(req.params.id)
        // Do updates of properties
        if (req.body.Eventname) toUpdate.Eventname = req.body.Eventname;
        if (req.body.Event_id) toUpdate.Event_id = req.body.Event_id;
        if (req.body.Eventtype) toUpdate.Eventtype = req.body.Eventtype;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
exports.Event_view_all_Page = async function (req, res) {
    try {
        theEvent = await Event.find();
        res.render('Event', { title: 'Event Search Results', results: theEvent });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Event delete on DELETE.
exports.Event_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Event.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.Event_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Event.findById(req.query.id)
        res.render('Eventdetail',
            { title: 'Event Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a Event.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Event_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Eventcreate', { title: 'Event Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


    // Handle building the view for updating a Event.
// query provides the id
exports.Event_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Event.findById(req.query.id)
    res.render('Eventupdate', { title: 'Event Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
exports.Event_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Event.findById(req.query.id)
    res.render('Eventdelete', { title: 'Event Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };