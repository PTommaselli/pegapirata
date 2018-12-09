var app = require('./serv_config/serv');


app.listen(3000,function() {
	console.log('SAR iniciado!');
});

app.set('port', process.env.PORT || 3000);
