var request = require('request');

module.exports = function (url, callback) {
  request.head({
    url: url,
    followRedirect: false
  }, function (err, r, body) {
    if (err) {
      return callback(err);
    }

    var location = r.headers.location || url;
    callback(null, location);
  });
};
