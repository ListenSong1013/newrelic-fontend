var newrelic = require('newrelic');
var app = require('express')();
var path = require('path');
// in express, this lets you call newrelic from within a template
app.locals.newrelic = newrelic;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.get('/user/:id', function(req, res) {
    console.log(newrelic.getBrowserTimingHeader())
    res.render('layout');
});

console.log('---------------------------->start');
app.listen(8877);