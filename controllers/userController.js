var model = require('../model/modeluser');

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