var net = require('net');
var strftime = require('strftime')
var port = process.argv[2];

var server = net.createServer(function(socket){
	var date = strftime('%F %H:%M', new Date());
	socket.write(date + '\n');
	socket.pipe(socket);
	socket.end();
});

server.listen(port, function(){ console.log('Listing on port: ' + port);});
