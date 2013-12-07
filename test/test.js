var test = require('tape');
var unshort = require('../');

test('unshort bit.ly', function (t) {
  t.plan(2);

  unshort('http://bit.ly/1gLsRzC', function (err, url) {
    t.ok(!!!err, 'must not fail');
    t.equals(url, 'http://github.com/julianduque');
  });
});

test('unshort buff.ly', function (t) {
  t.plan(2);

  unshort('http://skift.com/2013/12/06/how-albuquerque-tourism-learned-to-love-breaking-bad/', function (err, url) {
    t.ok(!!!err, 'must not fail');
    t.equals(url, 'http://skift.com/2013/12/06/how-albuquerque-tourism-learned-to-love-breaking-bad/')
  });

});
