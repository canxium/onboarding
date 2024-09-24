const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require("cookie-parser");
const { logs, whiteList_Ip } = require('@config/constants');
const error = require('@middlewares/error');
const apiRoutes = require('@routes');
const cacheControl = require('express-cache-controller');
const path = require('path');

/**
* Express instance
* @public
*/
const app = express();

app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "default-src * 'unsafe-eval' 'unsafe-inline'; font-src *; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src *;"
  );
  next();
});

app.use(cacheControl({ maxAge: 0, sMaxAge: 86400 })); // cached 1 day for cloudflare

// dashboard ui
app.use(express.static('dist'));

app.use('/assets', express.static('dist/assets'));

// request logging. dev: console | production: file
app.use(morgan(logs, {
  skip: function (req, res) { return req.url.indexOf('/assets') === 0 || req.url.indexOf('/monitor/reports') === 0 }
}));

app.use(cookieParser());
// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
// app.use(methodOverride());

// secure apps by setting various HTTP headers
// app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.set('view engine', 'ejs');
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  return next();
});

app.get('/:campaign', function(req, res) {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

// mount api v1 routes
app.use('/api', apiRoutes);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);


module.exports = app;
