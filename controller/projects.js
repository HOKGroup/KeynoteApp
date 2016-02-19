var mongoose = require('mongoose'),

Project = mongoose.model('Project');

ProjectService = {

  findAll : function(req, res){
    Project.find({},function(err, results) {
      return res.send(results);
    });
  },

  findById : function(req, res){
    var id = req.params.id;
    Project.findOne({'_id':id},function(err, result) {
      return res.send(result);
    });
  },

  add : function(req, res) {
    Project.create(req.body, function (err, project) {
      if (err) return console.log(err);
      return res.send(project);
    });
  },

  update : function(req, res) {
    var id = req.params.id;
    //console.log(req.body);
    console.log('Updating ' + id);
    Project.update({"_id":id}, req.body, {upsert:true},
      function (err, numberAffected) {
        if (err) return console.log(err);
        console.log('Updated %s instances', numberAffected.toString());
        return res.sendStatus(202);
    });
  },

  delete : function(req, res){
    var id = req.params.id;
    Project.remove({'_id':id},function(result) {
      return res.send(result);
    });
  }

  };

module.exports = ProjectService;