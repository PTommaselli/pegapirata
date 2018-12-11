module.exports = function (app) {
  app.get('/', function(req, res) {
    // res.render('index')
    app.app.controller.index.getRegistros(app, req, res);
  });  
}
