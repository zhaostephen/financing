module.exports = function(app){
    app.get('/api/stock/:id', function(req, res){
        console.log('received '+req.url);

        if(req.params.id==100){
            res.json({id:100, code:'000001.sh'});
        }
        else{
            res.end();
        }
    })

    app.use(function(req, res){
        res.status(404);
        res.type('text/plain');
        res.send('404 - Not Found');
    });
}