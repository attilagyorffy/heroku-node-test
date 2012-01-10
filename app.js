var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var message = 'Hello World!\n\n';
  message += '<code><pre>';
  message += require('util').inspect(process.versions, true, null);
  message += '</pre></code>';
  
  response.send(message);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});