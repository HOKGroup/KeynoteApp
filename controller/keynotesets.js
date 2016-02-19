var mongoose = require('mongoose'),

KeynoteSet = mongoose.model('KeynoteSet');

KeynoteSetService = {

  findAll : function(req, res){
    KeynoteSet.find({},function(err, results) {
      return res.send(results);
    });
  },

  findById : function(req, res){
    var id = req.params.id;
    KeynoteSet.findOne({'_id':id},function(err, result) {
      return res.send(result);
    });
  },

  add : function(req, res) {
    KeynoteSet.create(req.body, function (err, keynoteSet) {
      if (err) return console.log(err);
      return res.send(keynoteSet);
    });
  },

  update : function(req, res) {
    var id = req.params.id;
    //console.log(req.body);
    console.log('Updating ' + id);
    KeynoteSet.update({"_id":id}, req.body, {upsert:true},
      function (err, numberAffected) {
        if (err) return console.log(err);
        console.log('Updated %s instances', numberAffected.toString());
        return res.sendStatus(202);
    });
  },

  delete : function(req, res){
    var id = req.params.id;
    KeynoteSet.remove({'_id':id},function(result) {
      return res.send(result);
    });
  }

  };

module.exports = KeynoteSetService;