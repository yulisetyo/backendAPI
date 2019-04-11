var express = require('express');
var app = express();
const PORT = 3000;
var cors = require('cors');
var router = require('./routes/route');
var parser = require('body-parser');

var logger = function(req, res, next){
    console.log('someone accessing your endpoint...');
    next();
}
//inisialisasi passport
var passport = require('passport');
app.use(passport.initialize());

//parse application/JSON
app.use(parser.json())
//parse form
app.use(parser.urlencoded({extended: true}));

app.use(cors());
app.use(logger);
//definisikan endpoint
app.use('/', router);

//listening post when server is up and running
app.listen(
    PORT,
    function(){
        console.log('Server is up and running on port '+PORT);
    }
);

//definisikan endpoint
// app.get('/', function(req, res){
//     res.send('Hello, this is my first express');
// });

// app.get('/user', function(req, res){
//     var model = require('./modeluser');
//     //dari file json
//     // res.json(model.getAllUser());

//     //dari koneksi mysql
//     model.getUsers(res);
// });

// app.get('/user/:id', function(req, res){
//     var model = require('./modeluser');
//     model.getUser(req, res);
// });

// app.post('./user', function(req, res){
//     res.json(model.getAllUser());
// });
