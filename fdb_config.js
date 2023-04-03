var admin = require("firebase-admin");
var serviceAccount = require("./serviceKey.json");
admin.initializeApp({  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://robobook-31321-default-rtdb.firebaseio.com"});

  const fdb=admin.database();
  module.exports = fdb