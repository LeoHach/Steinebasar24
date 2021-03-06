const express = require('express');
const createError = require('http-errors');
const indexRouter = require('./routes/shop');
const productRouter = require('./routes/admin');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use('/', indexRouter);
app.use('/admin', productRouter);

app.use(express.static('public'));

app.use(cookieParser());

app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));


// set views
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
    next(createError(404));
  });
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
