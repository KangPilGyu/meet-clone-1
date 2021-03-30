const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passort = require('passport');
const passortConfing = require('./config/passport');
const dotenv = require('dotenv').config().parsed;
const cors = require('cors');
const routesUser = require('./routes/users.js');
const routesAuth = require('./routes/auth.js');
const indexRouter = require('./routes/index');

var app = express();
app.io = require('socket.io')();

// healthcheck
app.get('/helath-check', (req, res) => {
  res.send('Health Success');
});

// redirect
if (dotenv.APP_ENV === 'production') {
  app.use(function (req, res, next) {
    if (!req.secure && req.get('X-Forwarded-Proto') !== 'https') {
      res.redirect('https://' + req.get('Host') + req.url);
    } else next();
  });
}

// if (dotenv.APP_ENV === 'production') {
//   if (req.get('x-forwarded-proto') != "https") {
//     res.set('x-forwarded-proto', 'https');
//     res.redirect('https://' + req.get('host') + req.url);
//   } else {
//     next();
//   }
// }

// cors policy

const options = {
  origin: ['http://localhost:3000', 'http://localhost:3100', 'https://everywhere-meet.com'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PATCH', 'DELETE'],
  optionsSuccessStatus: 200,
};
app.use(cors(options));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// passport conifg
app.use(passort.initialize());
passortConfing();

//routes handler
app.use('/', indexRouter);
app.use('/auth', routesAuth);
app.use('/api', routesUser);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

module.exports = app;
