var express = require('express'),
    app     = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/views/index.html');
});

app.listen(4000, function(){
  console.log('Listening on port 4000...');
});
