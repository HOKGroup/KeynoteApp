 module.exports = function(app) {
    var keynotes = require('./controller/keynotes');
    app.get('/keynotes', keynotes.findAll);
    app.get('/keynotes/:id', keynotes.findById);
    app.post('/keynotes', keynotes.add);
    app.put('/keynotes/:id', keynotes.update);
    app.delete('/keynotes/:id', keynotes.delete);
  }