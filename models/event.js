const mongoose = require("mongoose")
const EventSchema = mongoose.Schema({
Eventname: String,
Event_id: Number,
Eventtype: String
})
module.exports = mongoose.model("Event",
EventSchema)