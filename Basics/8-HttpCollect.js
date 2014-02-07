var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
	var collected = '';
	response.setEncoding('utf8');
	
	response.on('data', function(data){
		collected += data;
	});
	
	response.on('end', function(data){
		console.log(collected.length);
		console.log(collected);
	});

	response.on('error', function(error) { 
		console.log('An error occured: ' + error); 
	});
});