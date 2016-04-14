var mongoose = require('mongoose'),

Keynote = mongoose.model('Keynote');

KeynoteService = {

  findAll : function(req, res){
    Keynote.find({},function(err, results) {
      return res.send(results);
    });
  },

  findById : function(req, res){
    var id = req.params.id;
    Keynote.findOne({'_id':id},function(err, result) {
      return res.send(result);
    });
  },

  findBySetId : function(req, res){
    var id = req.params.setid;
    Keynote.find({'keynoteSet_id':id},function(err, result) {
      return res.send(result);
    });
  },
  
  insertBatch : function(req, res) {
    console.log('Insert batch');
    Keynote.insertMany(req.body, function (err, keynoteEntry) {
      if (err) return console.log(err);
      return res.send(keynoteEntry);
    });
  },
  
  /* add : function(req, res) {
    Keynote.create(req.body, function (err, keynoteEntry) {
      if (err) return console.log(err);
      return res.send(keynoteEntry);
    });
  }, */

  update : function(req, res) {
    var id = req.params.id;
    //console.log(req.body);
    console.log('Updating ' + id);
    Keynote.update({"_id":id}, req.body, {upsert:true},
      function (err, numberAffected) {
        if (err) return console.log(err);
        console.log('Updated %s instances', numberAffected.toString());
        return res.sendStatus(202);
    });
  },

  delete : function(req, res){
    var id = req.params.id;
    Keynote.remove({'_id':id},function(result) {
      return res.send(result);
    });
  },
  
  deleteAllForKeynoteSet : function(req, res){
    var id = req.params.setid;
    Keynote.remove({'keynoteSet_id':id},function(err, results) {
      return res.send(results);
    });
  }

  };

module.exports = KeynoteService;