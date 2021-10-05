var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/employee_db";
 MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   
   const db = client.db("user_managements");
   var myquery = { first_name:"vijay" };
   var newvalues = { $set: {last_name: "J", email:"vijay.joseph@valuebound.com" } };
   db.collection("users").updateOne(myquery,newvalues, function (err) {
     if (err) throw err;
     console.log("uploaded successfully...");
     client.close();
   });
 });

