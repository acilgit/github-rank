/**
 * Created by XY on 2017-05-11.
 */
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./dist'));
// app.set('views', __dirname + '/views');
// app.set('view engine', 'pug');

// app.use(multiparty());
// app.use(session({}));
// app.use(favicon());
// app.use(logger('dev'));
// app.use(bodyParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
// app.use(cookieParser());
// app.use('/', routes);
// app.use('/users', users);

app.get('/', function (req, res) {
    res.sendFile(path.resolve('./app/index.html'));
});

app.listen(3000, function (error) {
    if (error) throw error;
    console.log('listening on port 3000');
});

