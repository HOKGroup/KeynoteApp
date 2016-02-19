var mongoose = require( 'mongoose' );

var Schema = mongoose.Schema;

var keynoteSetSchema = new Schema(
  {  _id          : String // guid
    , name      : String
    , createdBy        : String
	, dateModified        : Date
	, modifiedBy		:String
	 }
);

var KeynoteSetModel = mongoose.model( 'KeynoteSet', keynoteSetSchema );

// var instance = new KeynoteSetModel();
// instance._id = 'd89f808e-4ad1-4d14-94d5-feef749520c9';
// instance.name = '00';
// instance.createdBy = 'Jinsol Kim';

// instance.save(function(err){
	// console.log('save returned err = '+err);
// });