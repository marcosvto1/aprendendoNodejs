exports.notFound = function(req, res, next) {
  res.status(404);
  res.render('./views/not-found');
};

exports.serverError = function(error, req, res, next) {
  res.status(500);
  res.render('./views/server-error', {error: error});
};