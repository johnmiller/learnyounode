console.log(parseVals(process.argv));

function parseVals(args){
	if (args.length < 3) return 0;

	var total = 0

	for (var i = 2; i < args.length; i++)
		total += +args[i];

	return total;
}