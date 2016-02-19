var mongoose = require('mongoose'),

Keynote = mongoose.model('keynoteEntry');

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

  add : function(req, res) {
    Keynote.create(req.body, function (err, keynoteEntry) {
      if (err) return console.log(err);
      return res.send(keynoteEntry);
    });
  },

  //update : function(req, res) {
  //  var id = req.params.id;
  //  //console.log(req.body);
  //  console.log('Updating ' + id);
  //  Door.update({"_id":id}, req.body,
  //    function (err, numberAffected) {
  //      if (err) return console.log(err);
  //      console.log('Updated %s instances', numberAffected.toString());
  //      return res.sendStatus(202);
  //  });
  //},

  //update2 : function(req, res) {
  //  var id = req.params.id;
  //  //console.log(req.body);
  //  console.log('Updating ' + id);
  //  Door.findOne({'_id':id},function(err, result) {
  //    if(result) {
  //      Door.update({"_id":id}, req.body,
  //        function (err, numberAffected) {
  //          if (err) return console.log(err);
  //          console.log('Updated %s instances', numberAffected.toString());
  //          return res.sendStatus(202);
  //      });
  //    }
  //    else {
  //      Door.create(req.body, function (err, instance) {
  //        if (err) return console.log(err);
  //        return res.send(instance);
  //      });
  //    }
  //  });
  //},

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
  }

};

module.exports = KeynoteService;