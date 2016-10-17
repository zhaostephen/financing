var app = require('express')();
var routine = require('./server/route.js')(app);

var config = {
    port:process.env.PORT || 3000,
    node_env:process.env.node_env || 'development'
}

console.log(config);

app.listen(config.port, function(req, res){
    console.log('started');
});