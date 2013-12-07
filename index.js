var request = require('request');

module.exports = function (url, callback) {
  request.head(url, function (err, r, body) {
    if (err) {
      return callback(err);
    }

    var location = r.request.href || url;
    callback(null, location);
  });
};
