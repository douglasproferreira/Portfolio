const express = require('express');

const app = express();

app.use(express.json());

app.use(express.static(__dirname + '/public'));

//console.log(__dirname)

app.get('/', function(req, res){
    res.render('index');
  });
  
var porta = process.env.PORT || 8080;
app.listen(porta);
