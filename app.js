var express = require('express');
var ejs = require('ejs');
var city = require('./routes/city');

var app = express();

app.use(express.static(__dirname+'/public'));


app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('home',{headline:'I love my city',title:'Home Page'})
});

app.get('/:city', city.city);

/*app.get('/:city', function(req, res){
	var city = req.params.city;
	var heading, title,imgCount;

	if (city==='berlin') {
		title = 'Berlin'
		heading = 'Berlin city'
	} else if (city==='london') {
		title = 'London'
		heading = 'London city'
	} else if (city==='newyork') {
		title = 'NewYork'
		heading = 'NewYork city'
	}
	res.render('city',{city:city,headline:heading,title:title});
});*/

app.listen(3000, function(){
	console.log('Server is running');
});