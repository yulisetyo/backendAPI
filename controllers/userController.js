var model = require('../model/modeluser');
var User = require('../model/user');
//get all user
exports.users = (req, res)=>{
    User.getAll().then(user=>{res.json(user)})
        .catch(err=>res.send(err));
}

//get user by id
exports.user=(req, res)=>{
    User.getUser(req.params).then(user=>{res.json(user)})
    .catch(err=>res.send(err));
}

//login
exports.login = function(req, res){
    //read credentials
    console.log(req.body);
    const {email, password} = req.body;
    
    if(email&&password) {
        model.authUser(req.body, res);
    } else {
        res.send('LOGIN ENDPOINT');
    }
}

exports.add = function(req, res){
    User.addUser(req.body);
}