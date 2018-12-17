module.exports = function (app) {
  app.post('/cadastroUser', function(req, res) {
    app.app.controller.cadastro.inUsuario(app, req, res);
  });
  app.post('/cadastroRegistro', function(req, res) {
    app.app.controller.cadastro.inRegistro(app, req, res);
  });
}
