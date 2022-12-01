const mongoose = require("mongoose")
const EventSchema = mongoose.Schema({
Eventname:{ type: String, minlength: '1', maxlength:'20'},
Event_id:{ type: Number, min:'1', max:'2500' },
Eventtype:{type: String, minlength: '1', maxlength:'20'}
})
module.exports = mongoose.model("Event",
EventSchema)