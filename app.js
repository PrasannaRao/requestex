var exp = require('express');
var app = exp();

app.get('/players',function(req,res){
	var query = req.query;
	console.log('query value' + JSON.stringify(query));
	res.write(query.name);
	res.write(query.lang);
	res.end();
});

var port = process.env.PORT || 4000;
app.listen(port,function(){
	console.log('server is listening in ' + port);
});