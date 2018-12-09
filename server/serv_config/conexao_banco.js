let mysql = require('mysql');

// LOCALHOST
var acessar_banco = function() {
	return mysql.createConnection({
			host:'localhost',
			user:'nycolasSF',
			password:'bd_nycolas',
			database:'pegapirata'
		});
}

acessar_banco().connect();

module.exports = function(){
		console.log('Banco Conectado !!');
		return acessar_banco;
 }
