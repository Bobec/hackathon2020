const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs');
const { resolveProjectReferencePath } = require('typescript');
const orient = require('./database');
const app = express();
const OrientDBClient = require("orientjs").OrientDBClient;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.post('/login', function (req, res) {
  
  respond = {
      "status" : false,
      "token" : String
  }

  readUserData(function(data){
    
    for(let x = 0; x < data.length; x++) {
        if(data[x].username == req.body.username && data[x].password == req.body.password) {
            respond["status"] = true;
            respond["token"] = "stringqer";
        }
    }
    res.send(JSON.stringify(respond))
  });

})

app.post('/testDB', function(req, res) {
  
  x = Math.random().toString();
  
  orient.database("get", "select * from Medic", {}, res);

  // respond = orient.database("get", "select * from Medic", {});
  // orient.database("add", "insert into Medic set nume = :name, specializare = :spec, uuid = :uu", {name: "name2" + x, spec: "6672" + x, uu: "81d75b43-58b0-4234-92f4-db3ae4c548c1"})
  // orient.database("delete", "delete vertex from Medic", {});
  // console.log(orient.data1);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


'use strict';

readUserData = function(callback) {
    fs.readFile('./data/loginData.json', (err, data) => {
        if (err) throw err;
        let loginInfo = JSON.parse(data);
        
        callback(loginInfo)
    });

}





