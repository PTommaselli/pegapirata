class consultas {
  constructor(connection){
    this.connection = connection;
  }
  getRegistrosInUsuarios(callback){
    this.connection.query("SELECT * FROM Registros INNER JOIN Usuarios WHERE Usuarios_id_usuario = id_usuario", callback);
  }
  inUsuario(dados, callback){
    this.connection.quey("INSERT INTO Usuarios VALUES ?", dados, callback)
  }
  inRegistro(dados, callback){
    this.connection.query("INSERT INTO Registros VALUES(0, '"+dados.nome_registro+"', '"+dados.tipo_registro+"', '"+dados.nome_registro+"', now(), 'img/boletimOcorrencia.png', '"+dados.latitude+"', '"+dados.longitude+"', "+dados.Usuarios_id_usuario+")", callback);
  }
}
module.exports = function() {
  return consultas;
}
