module.exports = function(req, res, next){
	console.log(req.method, '\t', req.urlObj.pathname);
	next();
}