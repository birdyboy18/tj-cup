var css = require('sheetify')
var choo = require('choo')
var clickStore = require('./stores/clicks')
var timesStore = require('./stores/times');
var modalStore = require('./stores/modal');

css('tachyons')
css('./css/main.css');

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  // Enable once you want service workers support. At the moment you'll
  // need to insert the file names yourself & bump the dep version by hand.
  // app.use(require('choo-service-worker')())
}

app.use(timesStore)
app.use(modalStore)

app.route('/', require('./views/main'))
app.route('/admin', require('./views/admin/admin'))
app.route('/*', require('./views/404'))

if (!module.parent) app.mount('body')
else module.exports = app
