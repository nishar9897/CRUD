var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/";
 MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   const db = client.db("user_managements");
   var myquery={first_name:"ram"};
   db.collection("users").deleteOne(myquery, function (err, res) {
     if (err) throw err;
     console.log("Number of records deleted: " + res.deletedCount);
     client.close();
   });
 });

