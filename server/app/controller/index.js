module.exports.getRegistros = function(app, req, res){
  let connection = app.serv_config.conexao_banco();
  let pesquisa = new app.app.model.consutasSQL(connection);

  pesquisa.getRegistrosInUsuarios(function (error, getRegistros) {
    res.send(getRegistros);
  });
}
