 module.exports = function(app) {
    var keynotes = require('./controller/keynotes');
    app.get('/api/v1/keynotes', keynotes.findAll);
    app.get('/api/v1/keynotes/:id', keynotes.findById);
	app.get('/api/v1/keynotes/setid/:setid', keynotes.findBySetId)
    app.post('/api/v1/keynotes', keynotes.add);
    app.put('/api/v1/keynotes/:id', keynotes.update);
    app.delete('/api/v1/keynotes/:id', keynotes.delete);
	
	var projects = require('./controller/projects');
	app.get('/api/v1/projects', projects.findAll);
    app.get('/api/v1/projects/:id', projects.findById);
    app.post('/api/v1/projects', projects.add);
    app.put('/api/v1/projects/:id', projects.update);
    app.delete('/api/v1/projects/:id', projects.delete);
	
	var keynotesets = require('./controller/keynotesets');
	app.get('/api/v1/keynotesets', keynotesets.findAll);
    app.get('/api/v1/keynotesets/:id', keynotesets.findById);
    app.post('/api/v1/keynotesets', keynotesets.add);
    app.put('/api/v1/keynotesets/:id', keynotesets.update);
    app.delete('/api/v1/keynotesets/:id', keynotesets.delete);
  }