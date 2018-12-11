module.exports.getRegistros = function(app, req, res){
  let connection = app.serv_config.conexao_banco();
  let pesquisa = new app.app.model.consutasSQL(connection);

  pesquisa.cadastroUsuario(nome, email, img, function (error, getRegistros) {
    res.send(getRegistros);
  });
}
/*  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
var url = 'https://example.com/profile';
var data = {username: 'example'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));




input file

var formData = new FormData();
var fileField = document.querySelector("input[type='file']");

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', JSON.stringify(response)));


*/
