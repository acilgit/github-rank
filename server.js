/**
 * Created by XY on 2017-05-11.
 */
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./dist'));
// app.set('views', __dirname + '/views');
// app.set('view engine', 'pug');
app.get('/', function (req, res) {
    res.sendFile(path.resolve('./app/index.html'));
});

app.listen(3000, function (error) {
    if (error) throw error;
    console.log('listening on port 3000');
});
