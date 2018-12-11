class consultas {
  constructor(connection){
    this.connection = connection;
  }
  getRegistrosInUsuarios(callback){
    this.connection.query("SELECT * FROM Registros INNER JOIN Usuarios WHERE Usuarios_id_usuario = id_usuario", callback);
  }
  inUsuario(nome, email, img){
    this.connection.quey("INSERT INTO Usuarios VALUES(0, '"+nome+"', 'senha"+email+"', '"+email+"', '"+img+"')", callback)
  }
  inRegistro(){
    this.connection.query
  }
}
module.exports = function() {
  return consultas;
}
