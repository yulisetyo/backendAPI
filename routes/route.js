var express = require('express');
var router = express.Router();
var model = require('../model/modeluser');
var controller = require('../controllers/userController');
var passport = require('../local');

//definisi route
router.post('/login', controller.login); 
router.get('/', 
    function(req, res){
        res.send('Hello, this is my first express');
    });
router.get('/users', 
    passport.authenticate('jwt', {session: false}),
    function(req, res){
        //dari koneksi mysql
        model.getUsers(res);
        //var model = require('./modeluser');

        //dari file json
        // res.json(model.getAllUser());
    });
router.get('/user/:id', 
    function(req, res){
        //var model = require('./modeluser');
        model.getUser(req, res);
    });
router.post('./user', 
    function(req, res){
        res.json(model.getAllUser());
    });

module.exports = router;