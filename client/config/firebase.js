const firebase = require('firebase/app');
// Required for side-effects
require('firebase/firestore');

var config = {
    apiKey: process.env.VUE_APP_APIKEY,
    authDomain: process.env.VUE_APP_AUTHDOMAIN,
    databaseURL: process.env.VUE_APP_DATABASEURL,
    storageBucket: process.env.VUE_APP_STORAGEBUCKET,
    projectId: process.env.VUE_APP_PROJECTID
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var db = firebase.firestore();

  export default db
