module.exports = function (app) {
  app.post('/cadastro', function(req, res) {
    app.app.controller.cadastro.usuario(app, req, res);
  });
}
