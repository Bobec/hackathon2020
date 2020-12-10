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
  action = "Select from " + req.body.cont + ' Where nume = "' + req.body.parameters.name + '"';
  console.log(action);
    orient.database('login', action, {}, res);

})

app.post('/register', function (req, res) {


  action = "insert into " + req.body.cont + " set";

  console.log(req.body);

    if(req.body.cont == "Medic") {
      action += " nume=:nume, specializare=:spec, uuid=:uu"
    }
    else {
      action += " nume=:nume, varsta=:varsta, uuid=:uu"
    }
  
  orient.database('register', action, req.body.parameters, res);

})

app.get('/pacienti', function(req, res) {
  orient.database("get", "select * from Pacient", {}, res);
});

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





