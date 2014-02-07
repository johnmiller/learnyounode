var http = require('http');
var urls = process.argv.slice(2, 5);
var requests = urls.map(function(url){ return { url: url, completed: false, response: '' }; });

requests.forEach(processRequest);

function processRequest(request){
	http.get(request.url, function(response){
		response.setEncoding('utf8');
		
		response.on('data', function(data){
			request.response += data;
		});
		
		response.on('end', function(data){
			request.completed = true;

			if (allRequestsComplete())
				writeResults();
		});

		response.on('error', function(error) { 
			console.log('An error occured: ' + error); 
		});
	});
}

function allRequestsComplete(){
	return requests.every(function(x){ return x.completed; });
}

function writeResults(){
	requests.forEach(function(request) {
		console.log(request.response);
	});
}