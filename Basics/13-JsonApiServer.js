var self = this;
var http = require('http');
var urlParser = require('url');
var port = process.argv[2];

function startServer() {
	var server = http.createServer(function(request, response){
		var url = urlParser.parse(request.url, true);
		var date = new Date(url.query.iso);
		var json = convertToTimeJson(url.path, date);

		if (!json) {
			writeFailureResponse();
			return;
		} 

		writeSuccessResponse(response, json);
	});

	server.listen(port, function(){ console.log('Listing on port: ' + port);});
}

function convertToTimeJson(url, date) {
	if (!date) return null;

	if (/^\/api\/parsetime/.test(url))
		return {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		};

	if (/^\/api\/unixtime/.test(url))
		return { unixtime: date.getTime() };

	return null;
}

function writeSuccessResponse(response, json) {
	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.end(JSON.stringify(json));
}

function writeFailureResponse(response) {
	response.writeHead(404);
	response.end();
}

startServer();