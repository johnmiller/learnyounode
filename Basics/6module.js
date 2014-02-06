var fs = require('fs');
var path = require('path');

module.exports = function(directory, extension, callback){
	extension = '.' + extension;

	fs.readdir(directory, function(err, files){
		if (err) return callback(err);

		var filesWithExt = [];

		files.forEach(function(file){
			if (path.extname(file) === extension)
				filesWithExt.push(file);
		})

		return callback(null, filesWithExt);
	});	
};