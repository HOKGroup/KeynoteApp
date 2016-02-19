//server.json
//
//main entry point for a cloud-based Keynote database application
//implemented as a node.js
//REST API driven mongoDB web server.
//
//Copyright 2016 by Jinsol Kim, HOK


var pkg = require('./package.json');
var cool = require('cool-ascii-faces');
var express = require('express');
var mongoose = require( 'mongoose' );

var localMongo = true;

if(localMongo){
	var mongo_uri = 'mongodb://localhost/keynote';
} else{
	var mongo_uri='mongodb://admin:admin@ds011158.mongolab.com:11158/keynote';
}

mongoose.connect(mongo_uri);
var db = mongoose.connection;
db.on( 'error', function () {
  var msg = 'unable to connect to database at ';
  throw new Error( msg + mongo_uri );
});

var app = express();
var bodyParser = require( 'body-parser' );

app.use( bodyParser.json({ limit: '10mb' }) );
app.use( bodyParser.urlencoded({ extended: true, limit: '10mb' }) );

require( './model/keynote' );
require( './routes' )( app );

app.get( '/', function( request, response ) {
  response.send( 'Hello from the cloud-based Keynote'
                + 'database ' + pkg.version + '.\n' );
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.set( 'port', process.env.PORT || 80 );

var server = app.listen(
  app.get( 'port' ),
  function() {
    console.log( 'Keynote server '
                + pkg.version
                + ' listening at port '
                + server.address().port + ' with '
                + (localMongo?'locally ':'mongolab-')
                + 'hosted mongo db.'); }
);