var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'angular_training'
});

exports.getUsers = function(res){
    con.query('SELECT * FROM users', 
        function(err, result, field){
            if(err){
                console.log('Query error '+err);
                return [];
            } else {
                // console.log(JSON.stringify(result));
                res.json(result);
            }
        });
}

exports.getUser = function(req, res){
  var id = req.params.id;
  console.log('paramater: '+req.params);
  con.query('SELECT * FROM users WHERE id=?', [id], function(err, result, field){
    if(err){
      console.log('Query error ', err);
      return [];
    } else {
      console.log('data ', JSON.stringify(result));
      res.json(result);
    }
  });
}

exports.getAllUser = function(){
    return [
        {
          "id": 1,
          "name": "Valentino Rossi",
          "username": "Bret",
          "email": "rossi.valentino@april.biz"
        },
        {
          "id": 2,
          "name": "Marc Marquez",
          "username": "Antonette",
          "email": "marquez.marc@melissa.tv"
        },
        {
          "id": 3,
          "name": "Andrea Dovizioso",
          "username": "Samantha",
          "email": "dovizioso.andrea@yesenia.net"
        },
        {
          "id": 4,
          "name": "Maverick Vinales",
          "username": "Karianne",
          "email": "vinales.maverick@kory.org"
        },
        {
          "id": 5,
          "name": "Jorge Lorenzo",
          "username": "Kamren",
          "email": "lorenzo.jorge@annie.ca"
        },
        {
          "id": 6,
          "name": "Franco Morbidelli",
          "username": "Leopoldo_Corkery",
          "email": "morbidelli.franco@jasper.info"
        },
        {
          "id": 7,
          "name": "Cal Crutchlow",
          "username": "Elwyn.Skiles",
          "email": "cal.crutchlow@billy.biz"
        },
        {
          "id": 8,
          "name": "Aleix Espargaro",
          "username": "Maxime_Nienow",
          "email": "espargaro.aleix@rosamond.me"
        },
        {
          "id": 9,
          "name": "Johann Zarco",
          "username": "Delphine",
          "email": "zarco.johann@dana.io"
        },
        {
          "id": 10,
          "name": "Danilo Petrucci",
          "username": "Moriah.Stanton",
          "email": "petrucci.danilo@karina.biz"
        }
      ]
}