var mongoose = require( 'mongoose' );

var Schema = mongoose.Schema;

var projectSchema = new Schema(
  {  _id          : String // guid
    , projectNumber      : String
    , projectName        : String
	, office        : String
	, keynoteSet_id		:String
	 }
);

var projectModel = mongoose.model( 'Project', projectSchema );