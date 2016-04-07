var mongoose = require('mongoose');

// this connects us to our database - FUCKING IMPORTANT
var connectionString = process.env.DB;

console.log('Attempting to connect to MongoDB');
mongoose.connect(connectionString); // connect to the DB supplied in the connectionString

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to: ' + connectionString);
});

mongoose.connection.on('error', function(error) {
  console.log('Mongoose has encountered an error: ' + error);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose has disconnected from: ' + connectionString);
});
