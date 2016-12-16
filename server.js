var express = require('express'),
    app     = express();

app.use(express.static('build'))
app.use(express.static('public'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(4000, function(){
  console.log('Listening on port 4000...');
});
