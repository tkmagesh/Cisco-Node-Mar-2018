module.exports = function(res){
	console.log('[@notFoundHandler] - serving 404');
	res.statusCode = 404;
	res.end();
};