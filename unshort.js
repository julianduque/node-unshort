#!/usr/bin/env node
var unshort = require('./index')

var url = process.argv[2]

unshort(url, function (err, result) {
  if (err) {
    console.error(err.message)
    return
  }

  console.log(result)
})
