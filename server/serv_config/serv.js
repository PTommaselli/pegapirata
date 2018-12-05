var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var cookieParser = require('cookie-parser');


var app = express();

// cookies
app.use(cookieParser());

// PUBLIC
app.set('view engine','ejs');
app.set('views','./app/views');

var expiryDate = new Date( Date.now() + 60 * 60 * 1500 );
app.use(session({
  secret: 'sshhhhh',
  saveUninitialized: true,
  resave: true,
  saveUninitialized: true,
 cookie: {
    secure: true,
   _expires: expiryDate ,
   originalMaxAge: 1000000
 }
}));


app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());


app.use(express.static('public'));

consign()
.include('app/routes')
.then('serv_config/conexao_banco.js')
.then('app/controller')
.then('app/model')
.into(app);

module.exports = app;
