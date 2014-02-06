var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(directory, function(err, files){
	files.forEach(function(file){
		if (path.extname(file) === extension)
			console.log(file);
	})
});