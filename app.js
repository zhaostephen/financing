var http = require('http');
var express = require('express');
var app = express();
var routine = require('./server/route.js')(app);

var config = {
    port:process.env.PORT || 3000,
    node_env:process.env.node_env || 'development'
}

console.log(config);

app.get('/api/stock/:id', function(req, res){
    console.log('received '+req.url);

    if(req.params.id==100){
        res.json({id:100, code:'000001.sh'});
    }
    else{
        res.end();
    }
});

app.use(function(req, res){
    res.status(404);
    res.type('text/plain');
    res.send('404 - Not Found');
});

app.listen(config.port, function(req, res){
    console.log('started');
});