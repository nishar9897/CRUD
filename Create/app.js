var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/";
 MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   var myobj = [
     { first_name: "sk", last_name: "joshua",email:"sk@valuebound.com",company:"valuebound",phone:4578946164 },
     { first_name: "aryan", last_name: "enoch" ,email:"aryan@valuebound.com",company:"valuebound",phone:985674589},
     { first_name: "tiny", last_name: "shan" ,email:"tiny@valuebound.com",company:"valuebound",phone:45889426688},
     { first_name: "shan", last_name: "venkat" ,email:"shan@valuebound.com",company:"valuebound",phone:733948759},
     { first_name: "ram", last_name: "shan" ,email:"ram@valuebound.com",company:"valuebound",phone:9995491265}
   ];
   const db = client.db("user_managements");
   db.collection("users").insertMany(myobj, function (err, res) {
     if (err) throw err;
     console.log("Number of records inserted: " + res.insertedCount);
     client.close();
   });
 });

