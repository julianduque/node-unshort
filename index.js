var request = require('request');

module.exports = function (url, callback) {
  request.head({
    url: url,
    headers: {
      'User-Agent': 'request'
    }
  }, function (err, r, body) {
    if (err) {
      return callback(err);
    }

    if (r.statusCode !== 301 && r.statusCode !== 302 && r.statusCode !== 200) {
      return callback(new Error(url + ' returns ' + r.statusCode))
    }

    var location = r.request.href || url;
    callback(null, location);
  });
};
