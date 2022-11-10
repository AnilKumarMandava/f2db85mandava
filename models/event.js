const mongoose = require("mongoose")
const eventSchema = mongoose.Schema({
eventname: String,
eventid: Number,
eventtype: String
})
module.exports = mongoose.model("Event",
eventSchema)