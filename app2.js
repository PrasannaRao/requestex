var exp = require('express');
var app = exp();
app.use(exp.static(__dirname + "/public"));

app.get('/players/:lang/:name',function(req,res){
	
	
	res.write(req.params.name);
	res.write(req.params.lang);
	res.end();
});

var port = process.env.PORT || 4000;
app.listen(port,function(){
	console.log('server is listening in ' + port);
});