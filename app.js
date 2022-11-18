var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var EventRouter = require('./routes/Event');
var gridRouter = require('./routes/gridbuild');
var usersRouter = require('./routes/users');
var selectorRouter = require('./routes/selector');
var Event = require("./models/Event");
var resourceRouter=require('./routes/resource')


// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await Event.deleteMany();
  let instance1 = new Event({Eventname:"Oscar",Event_id:1001,Eventtype:"Awards"});
  let instance2 = new Event({Eventname:"Mtv",Event_id:1002,Eventtype:"Release"});
  let instance3 = new Event({Eventname:"HBO",Event_id:1003,Eventtype:"Movie Launch"});
  instance1.save( function(err) {
  if(err) return console.error(err);
  console.log("First object saved")
  });
  
  instance2.save( function(err) {
      if(err) return console.error(err);
      console.log("Second object saved")
      });
  
  instance3.save( function(err) {
      if(err) return console.error(err);
      console.log("Third object saved")
          });
  }
  let reseed = true;
  if (reseed) { recreateDB();}

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Event', EventRouter);
app.use('/gridbuild',gridRouter);
app.use('/selector',selectorRouter);
app.use('/resource',resourceRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
