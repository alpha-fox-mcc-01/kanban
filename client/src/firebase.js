const firebase = require('firebase/app')
require('firebase/firestore')

const config = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  projectId: process.env.VUE_APP_PROJECTID
}

firebase.initializeApp(config)
const db = firebase.firestore()

module.exports = db
