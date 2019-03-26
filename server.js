const express = require('express');

const app = express();

// make express look in the public directory for assets (css/js/img)


app.use(express.json());

app.use(express.static(__dirname + '/css'));

app.get('/', function(req, res){
    res.sendfile('./index.html');
  });
  
  var porta = process.env.PORT || 8080;
  app.listen(porta);