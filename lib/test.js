// Generated by CoffeeScript 1.7.1
var getDeps, progeny;

progeny = require('./index');

getDeps = progeny({
  rootPath: '/Users/jon/base/coursera/site/app/www',
  shallow: true
});

getDeps(null, '/Users/jon/base/coursera/site/app/www/static/pages/open-course/index.styl', function(err, deps) {
  return console.log(deps);
});