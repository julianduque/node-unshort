var test = require('tape');
var unshort = require('../');

test('unshort bit.ly', function (t) {
  t.plan(2);

  unshort('http://bit.ly/1gLsRzC', function (err, url) {
    t.ok(!!!err, 'must not fail');
    t.equals(url, 'https://github.com/julianduque');
  });
});

test('unshort buff.ly', function (t) {
  t.plan(2);

  unshort('http://buff.ly/1967Gq7', function (err, url) {
    t.ok(!!!err, 'must not fail');
    t.equals(url, 'https://skift.com/2013/12/06/how-albuquerque-tourism-learned-to-love-breaking-bad/')
  });

});

test('unshort t.co', function (t) {
  t.plan(2);

  unshort('http://t.co/HXWgGQoXUd', function (err, url) {
    t.ok(!!!err, 'must not fail');
    t.equals(url, 'https://skift.com/2013/12/06/how-albuquerque-tourism-learned-to-love-breaking-bad/')
  });
});


test('unshort fb.me', function (t) {
  t.plan(2);

  unshort('http://fb.me/2ZfaNVDmo', function (err, url) {
    t.ok(!!!err, 'must not fail');
    t.equals(url, 'https://www.facebook.com/martinfabiancabrera/posts/10152399745389409');
  });
});
