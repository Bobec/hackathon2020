const OrientDBClient = require("orientjs").OrientDBClient;
const express = require('express')

var query = function(session, action, parameters, res){
    // use the session
    dataGot = [];
    session.query(action, {params: parameters})
    .on("data", data => {
        dataGot.push(data);
        console.log(data);
        console.log("############");
    })
    .on('error',(err)=> {
    console.log(err);
    })
    .on("end", () => {
        
        res.send(JSON.stringify(dataGot))
        console.log("End of the stream");
    });
    //close session
};

var command = async function(session, action, parameters) {
    try {
      console.log(action);

        let result = session.command(action, {params: parameters})
          .all();
        console.log(result);
        console.log("returned value^");
        return result;
      } catch (err) {
        console.log(err);
        return 500;
      }
};

var login = function(session, action, parameters, res) {

  try{
    command(session, action).then((ret) => {
      if(ret != 500 && ret != undefined && ret.length) {
        console.log(ret);
        res.send(JSON.stringify({"error": false, ret}));
        console.log("End of the stream");
  
      }
      else {
        
        res.send(JSON.stringify({"error": true, "status" : 500}))
        console.log("End of the stream");
      }

    });
  }
  catch(err) {
    console.log(err);
  }
}

var register = async function(session, action, parameters, res) {
  

  try{
    command(session, action, parameters).then((ret) => {
      if(ret != 500) {
        
        res.send(JSON.stringify({"error": false, ret}));
        console.log("End of the stream");
  
      }
      else {
        
        res.send(JSON.stringify({"error": true, "status" : 500}))
        console.log("End of the stream");
      }

    });
  }
  catch(err) {
    console.log(err);
  }
    
}


module.exports = {
  database: async function(method, action, parameters, res) {

    try{
            let client = await OrientDBClient.connect({
                host:       'localhost',
                port:       2424 
            });

        // var db = server.use('test');
        try {
            let session = await client.session({
              name: "test",
              username: "root",
              password: "parola"
            });
            
            switch (method) {
                case "get" :
                    return query(session, action, parameters, res);
                    break;
                
                case "add" :
                    command(session, action, parameters);
                    break;

                case "delete" :
                    command(session, action, parameters);
                    break;

                case "register" :
                    register(session, action, parameters, res);
                    break;
                case "login" :
                  login(session, action, parameters, res);
                  break;
            }

            await session.close();
          } catch (e) {
            console.log(e);
          }

          await client.close();
    
    }
    catch(err) {
        console.log("On error");
        console.log(err.message);
      }
       
  }
  
}
