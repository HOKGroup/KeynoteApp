var mongoose = require( 'mongoose' );

var Schema = mongoose.Schema;

var keynoteSchema = new Schema(
  {  _id          : String // guid
    , key      : String
    , parentKey        : String
	, description        : String
	 }
);

mongoose.model( 'keynoteEntry', keynoteSchema );