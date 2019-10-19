let express = require('express');
let server = express();

server.get('/', function(req, res){
    res.send('Hello, HELL!');
})

server.listen(8080, function(){
    console.log('IT\'WORKING!');
})