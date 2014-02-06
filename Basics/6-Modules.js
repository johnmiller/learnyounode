var filter = require('./FilterModule');
var directory = process.argv[2];
var extension = process.argv[3];

filter(directory, extension, function(err, data){
	if (err)
		return console.log('Unable to read directory');
		
	data.forEach(function(item){
		console.log(item);
	});
});
