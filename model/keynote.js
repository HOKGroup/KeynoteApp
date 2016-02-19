var mongoose = require( 'mongoose' );

var Schema = mongoose.Schema;

var keynoteSchema = new Schema(
  {  _id          : String // guid
    , key      : String
    , parentKey        : String
	, description        : String
	, keynoteSet_id		:String
	 }
);

var KeynoteModel =  mongoose.model( 'Keynote', keynoteSchema );

// var instance = new KeynoteModel();
// instance._id = '924e1dbe-48ed-4c21-b511-c95861683859';
// instance.key = '00';
// instance.parentKey = '';
// instance.description = 'DIVISION 00 - PROJECT REQUIREMENTS';
// instance.kyenoteSet_id = 'd89f808e-4ad1-4d14-94d5-feef749520c9';

// instance.save(function(err){
	// console.log('save returned err = '+err);
// });
