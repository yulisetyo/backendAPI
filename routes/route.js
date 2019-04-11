var express = require('express');
var router = express.Router();
var model = require('../model/modeluser');
var controller = require('../controllers/userController');

//definisi route
router.post('/gembel', controller.login);

router.get('/', function(req, res){
    res.send('Hello, this is my first express');
});

router.get('/user', function(req, res){
    //var model = require('./modeluser');
    //dari file json
    // res.json(model.getAllUser());

    //dari koneksi mysql
    model.getUsers(res);
});

router.get('/user/:id', function(req, res){
    //var model = require('./modeluser');
    model.getUser(req, res);
});

router.post('./user', function(req, res){
    res.json(model.getAllUser());
});

module.exports = router;