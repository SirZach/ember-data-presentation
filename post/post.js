/**
 * Created by tennizmazter on 3/17/14.
 */

var generateResponse = function(req, res, next) {
  res.body = req.body;
  next();
};

module.exports = {
  path: '/api/posts',
  callback: generateResponse
};
