const express = require('express');

const app = express();
app.use(express.json());

app.get('/', function(req, res){
    res.sendfile('./index.php');
  });
  
  var porta = process.env.PORT || 8080;
  app.listen(porta);